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
            .then(usersData=>{
                const [user_id] = usersData
                console.log('in get user id, user id =>',user_id);
                res.json(user_id)
                });

        } catch(e) {
            return res.sendStatus(403);
        };
        
    });
};

export const getApplicationLogs= async (req,res)=>{
    const accessToken = req.cookies.accessToken;
    const application_id = req.body.application_id;
    // console.log('shoval application_id',application_id);
    if(accessToken===null) return res.sendStatus(401);
    jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,async (err,decoded)=>{
        // console.log(decoded);
        if(err) return res.sendStatus(403);
       
        try {
            db.select('*')
            .from ('applications')
            .join('users','users.user_id','applications.user_id')
            .join('logs','logs.application_id','applications.application_id')
            .join('contact_info','contact_info.application_id','applications.application_id')
            .whereILike('email', `%${decoded.email}%`)
            .andWhere('applications.application_id', `${application_id}`)
            .then(applications=>{
                // console.log('getApplicationLogs application from db', applications);
                res.json(applications)
                });

        } catch(e) {
            console.log(e);
            return res.sendStatus(403);
        };
        
    });
};

export const getApplied= async (req,res)=>{
    // console.log('shoval getApplied');
    try{
        getJobAppFromDB('Applied')
        .then(application=>{
            // console.log(application);
            res.json(application)}
            );
    } catch(e){
        console.log(e);
    }
};

export const getHr= async (req,res)=>{
    // console.log('shoval getHr');
    try{
        getJobAppFromDB('HR')
        .then(application=>{
            res.json(application)}
            );
    } catch(e){
        console.log(e);
    }
};

export const getTechnical= async (req,res)=>{
    // console.log('shoval getTechnical');
    try{
        getJobAppFromDB('Technical')
        .then(application=>{
            res.json(application)}
            );
    } catch(e){
        console.log(e);
    }
};

export const getOffer= async (req,res)=>{
    // console.log('shoval getOffer');
    try{
        getJobAppFromDB('Offer')
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

};

export const saveJobInfo = async (req,res)=>{  
    // console.log('shoval saveJobInfo');
    const application_id = await insertToApplications(req.body.application);
    const logs_data =  await insertToLogs(req.body.application);
    const contact_data = await insertContactInfo(req.body.application);
    res.json(application_id);

};

const insertToApplications = async(application)=>{
    try{
        const id =  await db('applications').insert({
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
            const [application] = appTable_data
            return application.application_id;
        })
        // console.log('application_id',id);
        return id;
    } catch(e){
        console.log(e);
    }
};
const insertToLogs = async(application)=>{
    console.log("shoval insertlogs app id",application.application_id);
    try{
        const logs_table_data =  await db('logs').insert({
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
            console.log('insert into logs',logs_data);
            return logs_data
        })
    } catch(e){
        console.log(e);
    }
};
const insertContactInfo = async(application)=>{
    console.log("shoval insertContactInfo app id",application.application_id);

    try{
        const ContactInfo =  await db('contact_info').insert({
            application_id:application.application_id,
            contact_fname:application.contact_fname,
            contact_lname:application.contact_lname,
            contact_email:application.contact_email,
            contact_linkedin:application.contact_linkedin,
            contact_phone: application.contact_phone,
        })
        .returning ('*')
        .then (contact_data=>{
            console.log('insert into contacts',contact_data);
            return contact_data
        })
    } catch(e){
        console.log(e);
    }
}