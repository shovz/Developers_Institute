import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/Database.js';

export const getUsers= async (req,res)=>{
    try{
        db.select('*').from ('users')
        .then(users=>
            res.json(users)
            );
    } catch(e){
        console.log(e);
    }
};

export const register = async (req,res)=>{
    const {fname,lname,email,password,position,xp_years} = req.body;
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
                    position,
                    xp_years,
              })
              .returning ('*')
              .then (db_user=>{
                console.log(db_user);
                res.json(db_user[0]);
              })
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
            const {fname,lname} = db_users[0];
            const accessToken =
            jwt.sign({fname,lname},process.env.ACCESS_TOKEN_SECRET,{
                expiresIn:'30s'
            })
            res.cookie('accessToken',accessToken,{
                httpOnly:true,
                maxAge: 30*1000
            });
            res.json(accessToken);
           
        });
    
    } catch(e){
        res.status(404).json({msg: 'Email not found'})
    }

}

export const signOut = async (req,res)=>{
    const accessToken = req.cookie.accessToken;
    if(!accessToken) return res.sendStatus(204);
    res.clearCookie('accessToken');
    return res.sendStatus(200);


}


//checking if user exist
function checkIfExists(email){
     // const salt = await bcrypt.genSalt();
    // const hashPassword = await bcrypt.hash(password,salt);
    return db.select('email').from ('users')
    .where({email});
}

//checking if user exist
function isSignedIn(email){
  return db.select('fname','lname','password').from ('users')
  .where({email});
}
