import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/Database.js';

export const getProfile= async (req,res)=>{
    const {user_id} = req.body;
    try{
       const profile =  await db.select('email','fname','gender','lname','my_position','xp_years')
        .from ('users')
        .where('user_id',user_id)
        // console.log('server getProfile',profile);
        res.json(profile)
    } catch(e){
        console.log(e);
    }
};

export const delUser= async (req,res)=>{
    const {user_id} = req.body;
    // console.log('shoval sever del user user id',user_id);
    try{
        const response = await 
        db.from('users').where('user_id',user_id).del()
        console.log(response);
        res.json(response)
    } catch(e){
        console.log(e);
    }
};

export const register = async (req,res)=>{  
    const {fname,lname,email,password,my_position,xp_years,gender} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password,salt);
    try{
        checkIfExists(email) //checking if user exist
        .then(data=>{
            if(!data.length){ 
                db('users').insert({
                    fname,
                    lname,
                    email,
                    password:hashPassword,
                    my_position,
                    xp_years,
                    gender
              })
              .returning ('*')
              .then (db_user=>{
                console.log(db_user);
                res.json(db_user[0]);
              })
            } 
            else {
                res.status(400).json({msg: 'User already exists'})
            }
        });
    } catch(e){
        res.status(404).json({msg: 'Email already exists'})
    }

};

export const signIn = (req,res)=>{
    const {email,password} = req.body;
     try{
        isSignedIn(email)
        .then(async (db_users)=>{
            if(!db_users.length) return res.status(404).json({msg: 'Email or Password is incorect'});
            const match = await bcrypt.compare(password,db_users[0].password);
            if(!match) return res.status(404).json({msg: 'Email or Password is incorect'});
            const {fname,lname,user_id} = db_users[0];
            const accessToken =
            jwt.sign({email,user_id},process.env.ACCESS_TOKEN_SECRET,{
                expiresIn:'5h'
            })
            res.cookie('accessToken',accessToken,{
                httpOnly:true,
                maxAge: 3600*5000
            });
            res.json(accessToken);
           
        });
    
    } catch(e){
        res.status(404).json({msg: 'Email not found'})
    }

}

export const signOut = async (req,res)=>{
    const accessToken = req.cookies.accessToken;
    if(!accessToken) return res.sendStatus(204);
    res.clearCookie('accessToken');
    return res.sendStatus(200);


}


//checking if user exist
function checkIfExists(email){
    return db.select('email').from ('users')
    .where({email});
}

//checking if user exist
 function isSignedIn(email){
  return db.select('fname','lname','password','user_id').from ('users')
  .where({email});
}
