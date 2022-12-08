const SET_APPLIED = 'SET_APPLIED';
const SET_HR = 'SET_HR';
const SET_TECHNICAL = 'SET_TECHNICAL';
const SET_OFFER = 'SET_OFFER';
const SET_APP_STAGE_SORTED = 'SET_APP_STAGE_SORTED'


export const  setApplied = (appsData)=>(dispatch)=>{
    dispatch({type:SET_APPLIED,payload:appsData});
}

export const  setHr = (appsData)=>(dispatch)=>{
    dispatch({type:SET_HR,payload:appsData});
}

export const  setTech = (appsData)=>(dispatch)=>{
    dispatch({type:SET_TECHNICAL,payload:appsData});
}

export const  setOffer = (appsData)=>(dispatch)=>{
    dispatch({type:SET_OFFER,payload:appsData});
}

export const  setAppStageSorted = (appsData)=>(dispatch)=>{
    const appsData_Array = Object.entries(appsData)
    dispatch({type:SET_APP_STAGE_SORTED,payload:appsData_Array});
}



