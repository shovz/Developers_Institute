import db from '../config/Database.js';
import jwt from 'jsonwebtoken';


export const getUserId= async (req,res)=>{
    const accessToken = req.cookies.accessToken;
    // console.log('shoval getUserId', accessToken);
    if(accessToken===null) return res.sendStatus(401);
    jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,async (err,decoded)=>{
        // console.log(decoded.email);
        if(err) return res.sendStatus(403);
       
        try {
            db.select('user_id')
            .from ('users')
            .whereILike('email', `%${decoded.email}%`)
            .then(application=>{
                // console.log(application);
                res.json(application[0])
                });

        } catch(e) {
            return res.sendStatus(403);
        };
        
    });
};

export const getLogs= async (req,res)=>{
    const accessToken = req.cookies.accessToken;
    // console.log('shoval getLogs', accessToken);
    if(accessToken===null) return res.sendStatus(401);
    jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,async (err,decoded)=>{
        console.log(decoded.email);
        if(err) return res.sendStatus(403);
       
        try {
            db.select('*')
            .from ('applications')
            .join('users','users.user_id','applications.user_id')
            .join('logs','logs.application_id','applications.application_id')
            .join('contact_info','contact_info.application_id','applications.application_id')
            .whereILike('email', `%${decoded.email}%`)
            .then(application=>{
                console.log(application);
                res.json(application)
                });

        } catch(e) {
            return res.sendStatus(403);
        };
        
    });
};

export const getApplied= async (req,res)=>{
    console.log('shoval applied');
    try{
        getJobAppFromDB('applied')
        .then(application=>{
            console.log(application);
            res.json(application)}
            );
    } catch(e){
        console.log(e);
    }
};

export const getHr= async (req,res)=>{
    // console.log('shoval hr');
    try{
        getJobAppFromDB('hr')
        .then(application=>{
            res.json(application)}
            );
    } catch(e){
        console.log(e);
    }
};

export const getTechincal= async (req,res)=>{
    // console.log('shoval Techincal');
    try{
        getJobAppFromDB('techincal')
        .then(application=>{
            res.json(application)}
            );
    } catch(e){
        console.log(e);
    }
};

export const getOffer= async (req,res)=>{
    // console.log('shoval Offer');
    try{
        getJobAppFromDB('offer')
        .then(application=>{
            // console.log(application);
            res.json(application)}
            );
    } catch(e){
        console.log(e);
    }
};

const getJobAppFromDB =(stage)=>{
    return (db.select('*')
    .from ('applications')
    .join('users','users.user_id','applications.user_id')
    .join('logs','logs.application_id','applications.application_id')
    .where('stage',stage))

}

export const saveJobInfo = async (req,res)=>{  
    // console.log('shoval saveJobInfo',req.body.application);
     insertToApplications(req.body.application);
     insertToLogs(req.body.application);
     insertContactInfo(req.body.application);
};

const insertToApplications =(application)=>{
    try{
        db('applications').insert({
            user_id:application.user_id,
            // current_stage:application.current_stage,
            company:application.company,
            active:application.active,
            salary:application.salary,
            post_url:application.post_url,
            website:application.website,
            position:application.position,
            job_description:application.job_description,
            location:application.location,
            createdat:application.createdat,
            endedat:application.endedat,
        })
        .returning ('*')
        .then (appTable_data=>{
            // console.log(appTable_data);
            // return appTable_data
        })
    } catch(e){
        res.status(404).json({msg: 'applications table couldnt insert'})
    }
}
const insertToLogs =(application)=>{
    console.log("shoval inserlogs app id",application.application_id);
    try{
        db('logs').insert({
            application_id :application.application_id,
            method:application.method,
            stage:application.stage,
            date:application.date,
            notes:application.notes,
            assignment:application.assignment,
            assignment_date:application.assignment_date,
            completed_ass:application.completed_ass,
            rejected:application.rejected,
            refused:application.refused,
            reason:application.reason,
            offer:application.offer,
            offer_details :application.offer_details,
        })
        .returning ('*')
        .then (logs_data=>{
            console.log(logs_data);
            // return logs_data
        })
    } catch(e){
        res.status(404).json({msg: 'logs table couldnt insert'})
    }
}
const insertContactInfo =(application)=>{
    console.log("shoval insertContactInfo app id",application.application_id);

    try{
        db('contact_info').insert({
            application_id:application.application_id,
            contact_fname:application.contact_fname,
            contact_lname:application.contact_lname,
            contact_email:application.contact_email,
            contact_linkedin:application.contact_linkedin,
            contact_phone: application.contact_phone,
        })
        .returning ('*')
        .then (contact_data=>{
            console.log(contact_data);
            // return contact_data
        })
    } catch(e){
        res.status(404).json({msg: 'contact_info table couldnt insert'})
    }
}