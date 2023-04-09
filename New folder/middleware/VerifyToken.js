import jwt from 'jsonwebtoken';
import db from '../config/Database.js';



export const VerifyToken =(req,res,next)=>{
    const accessToken = req.cookies.accessToken;
    
    if(accessToken===null) return res.sendStatus(401);
    jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,async (err,decoded)=>{
        // console.log(decoded);
        if(err) return res.sendStatus(403);
       
        try {
            const user = 
            await db.select('*')
                .from ('users')
                .where({email:decoded.email});
            // console.log(user);
            await next();

        } catch(e) {
            return res.sendStatus(403);
        };
        
    });
};


