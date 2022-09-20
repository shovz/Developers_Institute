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
    const application_id = req.body.application_id;
        try {
            db.select('*')
            .from ('applications')
            .join('users','users.user_id','applications.user_id')
            .join('logs','logs.application_id','applications.application_id')
            .join('contact_info','contact_info.application_id','applications.application_id')
            .where('applications.application_id', `${application_id}`)
            .distinctOn(`stage`)
            .then(applications=>{
                res.json(applications)
                });

        } catch(e) {
            console.log(e);
            return res.sendStatus(403);
        };
        
    // });
};


export const sortedByStage = async(req,res)=>{
    const {user_id} = req.body
    const sorted_data_by_stage = {
        Applied : await getApplied(user_id),
        HR: await getHr(user_id),
        Technical :await getTechnical(user_id),
        Offer: await getOffer(user_id)
    }

    res.json(sorted_data_by_stage)
}


const getApplied= async (user_id)=>{
    try{
<<<<<<< HEAD
        const applied = await getJobAppStageData(user_id,'Applied')
        return applied;
=======
        getJobAppStageData('Applied')
        .then(application=>{
            // console.log(application);
            res.json(application)}
            );
>>>>>>> ecd023148f14312df0ee1657a60435f714ffab3a
    } catch(e){
        console.log(e);
    }
};

const getHr= async (user_id)=>{
    try{
<<<<<<< HEAD
        const hr = await getJobAppStageData(user_id,'HR')
        return hr;
=======
        getJobAppStageData('HR')
        .then(application=>{
            res.json(application)}
            );
>>>>>>> ecd023148f14312df0ee1657a60435f714ffab3a
    } catch(e){
        console.log(e);
    }
};

const getTechnical= async (user_id)=>{
    try{
<<<<<<< HEAD
        const technical = await  getJobAppStageData(user_id,'Technical')
        return technical;
=======
        getJobAppStageData('Technical')
        .then(application=>{
            res.json(application)}
            );
>>>>>>> ecd023148f14312df0ee1657a60435f714ffab3a
    } catch(e){
        console.log(e);
    }
};

const getOffer= async (user_id)=>{
    try{
<<<<<<< HEAD
        const offer = await  getJobAppStageData(user_id,'Offer')
        return offer
=======
        getJobAppStageData('Offer')
        .then(application=>{
            // console.log(application);
            res.json(application)}
            );
>>>>>>> ecd023148f14312df0ee1657a60435f714ffab3a
    } catch(e){
        console.log(e);
    }
};
<<<<<<< HEAD
const getJobAppStageData =(user_id,stage)=>{
=======

const getJobAppStageData =(stage)=>{
>>>>>>> ecd023148f14312df0ee1657a60435f714ffab3a
    return (db.select('*')
    .from ('applications')
    .join('users','users.user_id','applications.user_id')
    .join('logs','logs.application_id','applications.application_id')
    .where('stage',stage))
    .andWhere('active_stage',true)
<<<<<<< HEAD
    .andWhere('users.user_id',user_id)
};








export const deleteJobApp = async (req,res)=>{  
    const {application_id} = req.body;
    console.log('shoval sever del user user id',application_id);
    try{
        const response = await 
        db.from('applications').where('application_id',application_id).del()
        const updatedTable_data =  await getAllActiveJobApp();
        res.json(updatedTable_data)
    } catch(e){
        console.log(e);
    }
    
};
export const saveJobInfo = async (req,res)=>{  
    // console.log('shoval saveJobInfo application',req.body.application);
    // console.log('shoval saveJobInfo IsNewApp',req.body.IsNewApp);
    let application_id;
    if(req.body.IsNewApp)
    {
        application_id = await insertToApplications(req.body.application);
    }
    else{
        application_id = await UpdateApplication(req.body.application);
        await updateInActiveStage(req.body.application);
    }
    await insertToLogs(req.body.application,application_id);
    await insertContactInfo(req.body.application,application_id);
    const activeJobApp = await getAllActiveJobApp()
    // console.log('shoval allData', activeJobApp);
    res.json(activeJobApp);
    
};
export const getAllActiveJobApp= async () =>{
=======
};



export const saveJobInfo = async (req,res)=>{  
    // console.log('shoval saveJobInfo application',req.body.application);
    // console.log('shoval saveJobInfo IsNewApp',req.body.IsNewApp);
    let application_id;
    if(req.body.IsNewApp)
    {
        application_id = await insertToApplications(req.body.application);
    }
    else{
        application_id = await UpdateApplication(req.body.application);
        await updateInActiveStage(req.body.application);
    }
    await insertToLogs(req.body.application,application_id);
    await insertContactInfo(req.body.application,application_id);
    const activeJobApp = await getAllActiveJobApp()
    // console.log('shoval allData', activeJobApp);
    res.json(activeJobApp);
    
};

const getAllActiveJobApp= async () =>{
>>>>>>> ecd023148f14312df0ee1657a60435f714ffab3a
    return (db.select('*')
    .from ('applications')
    .join('users','users.user_id','applications.user_id')
    .join('logs','logs.application_id','applications.application_id')
    .where('active_stage',true)
    .distinctOn(`applications.application_id`)
    .orderBy('applications.application_id', 'desc')
    )
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
        
        return id;
    } catch(e){
        console.log(e);
    }
};
const UpdateApplication = async(application)=>{
    try{
        const id =  await db('applications')
        .where('application_id',application.application_id)
        .update({
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
            // console.log('UpdateApplication application_id',application);
            return application.application_id;
        })
        
        return id;
    } catch(e){
        console.log(e);
    }
};
<<<<<<< HEAD
=======

>>>>>>> ecd023148f14312df0ee1657a60435f714ffab3a
const insertToLogs = async(application,application_id)=>{
    // console.log("shoval insertlogs app id",application_id);
    try{
        const logs_table_data =  await db('logs').insert({
            application_id :application_id,
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
            active_stage:application.active_stage
        })
        .returning ('*')
        .then (logs_data=>{
            // console.log('insert into logs',logs_data);
            return logs_data
        })
        return logs_table_data;
    } catch(e){
        console.log(e);
    }
};
const updateInActiveStage = async(application)=>{
    try{
        const logs_table_data =  await db('logs')
        .update({active_stage:false})
        .where('application_id',application.application_id)
        .returning ('*')
        .then (logs_data=>{
            // console.log('update InActive Stage ',logs_data);
            return logs_data
        })
        return logs_table_data;
    } catch(e){
        console.log(e);
    }
};
const insertContactInfo = async(application,application_id)=>{
    // console.log("shoval insertContactInfo app id",application_id);

    try{
        const ContactInfo =  await db('contact_info').insert({
            application_id:application_id,
            contact_fname:application.contact_fname,
            contact_lname:application.contact_lname,
            contact_email:application.contact_email,
            contact_linkedin:application.contact_linkedin,
            contact_phone: application.contact_phone,
        })
        .returning ('*')
        .then (contact_data=>{
            // console.log('insert into contacts',contact_data);
            return contact_data
        })
        return ContactInfo;
    } catch(e){
        console.log(e);
    }
}