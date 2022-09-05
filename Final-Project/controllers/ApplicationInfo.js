import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../config/Database.js';

export const getApplication= async (req,res)=>{
    try{
        db.select('*')
        .from ('applications')
        .innerJoin('users','users.user_id','applications.user_id')
        .innerJoin('interviews','interviews.application_id','applications.application_id')
        .where('email','test@gmail.com')
        .then(application=>
            res.json(application)
            );
    } catch(e){
        console.log(e);
    }
};

export const register = async (req,res)=>{  
    const {fname,lname,email,password,xp_years,gender} = req.body;
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
            const {fname,lname} = db_users[0];
            const accessToken =
            jwt.sign({fname,lname,email},process.env.ACCESS_TOKEN_SECRET,{
                expiresIn:'1h'
            })
            res.cookie('accessToken',accessToken,{
                httpOnly:true,
                maxAge: 3600*1000
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

