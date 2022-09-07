const CHANGE_COMPANY = 'CHANGE_COMPANY';
const CHANGE_ACTIVE = 'CHANGE_ACTIVE';
const CHANGE_SALARY = 'CHANGE_SALARY';
const CHANGE_POST_URL = 'CHANGE_POST_URL';
const CHANGE_WEBSITE = 'CHANGE_WEBSITE';
const CHANGE_POSITION = 'CHANGE_POSITION';
const CHANGE_JOB_DESC = 'CHANGE_JOB_DESC';
const CHANGE_LOCATION = 'CHANGE_LOCATION';
const CHANGE_CREATED_DATE = 'CHANGE_CREATED_DATE';
const CHANGE_ENDED_DATE = 'CHANGE_ENDED_DATE';
const CHANGE_METHOD = 'CHANGE_METHOD';
const CHANGE_STAGE = 'CHANGE_STAGE';
const CHANGE_LOG_DATE = 'CHANGE_LOG_DATE';
const CHANGE_ASSIGNMENT = 'CHANGE_ASSIGNMENT';
const CHANGE_ASS_DATE = 'CHANGE_ASS_DATE';
const CHANGE_COMPLETED_ASS= 'CHANGE_COMPLETED_ASS';
const CHANGE_REJECTED= 'CHANGE_REJECTED';
const CHANGE_REFUSED = 'CHANGE_REFUSED';
const CHANGE_REASON = 'CHANGE_REASON';
const CHANGE_OFFER = 'CHANGE_OFFER';
const CHANGE_OFFER_DETAILS = 'CHANGE_OFFER_DETAILS';


export const  setCompany= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_COMPANY,payload:value});
}

export const  setJobActive= (value)=>(dispatch)=>{
    // console.log(value);
    dispatch({type:CHANGE_ACTIVE,payload:value});
}

export const  setSalary= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_SALARY,payload:value});
}

export const  setPost_url= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_POST_URL,payload:value});
}

export const  setWebsite= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_WEBSITE,payload:value});
}

export const  setPosition= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_POSITION,payload:value});
}

export const  setJob_description= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_JOB_DESC,payload:value});
}


export const  setLocation= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_LOCATION,payload:value});
}

export const  setCreatedat= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_CREATED_DATE,payload:value});
}

export const  setEndedat= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_ENDED_DATE,payload:value});
}

export const  setJobMethod= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_METHOD,payload:value});
}

export const  setJobStage= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_STAGE,payload:value});
}

export const  setLogDate= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_LOG_DATE,payload:value});
}

export const  setaJobAssignment= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_ASSIGNMENT,payload:value});
}

export const  setAssignment_date= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_ASS_DATE,payload:value});
}

export const  setCompletedAss= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_COMPLETED_ASS,payload:value});
}


export const  setJobRejected= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_REJECTED,payload:value});
}

export const  setJobRefused= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_REFUSED,payload:value});
}

export const  setJobReason= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_REASON,payload:value});
}

export const  setJobOffer= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_OFFER,payload:value});
}

export const  setOfferDetails= (value)=>(dispatch)=>{
    dispatch({type:CHANGE_OFFER_DETAILS,payload:value});
}


