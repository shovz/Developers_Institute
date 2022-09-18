const SET_APPLIED_TAB = 'SET_APPLIED_TAB';
const SET_HR_TAB = 'SET_HR_TAB';
const SET_TECH_TAB = 'SET_TECH_TAB';
const SET_OFFER_TAB = 'SET_OFFER_TAB';

export const  setAppliedTab = (appsData)=>(dispatch)=>{
    dispatch({type:SET_APPLIED_TAB,payload:appsData});
}

export const  setHrTab = (appsData)=>(dispatch)=>{
    dispatch({type:SET_HR_TAB,payload:appsData});
}

export const  setTechTab = (appsData)=>(dispatch)=>{
    dispatch({type:SET_TECH_TAB,payload:appsData});
}

export const  setOfferTab = (appsData)=>(dispatch)=>{
    dispatch({type:SET_OFFER_TAB,payload:appsData});
}



