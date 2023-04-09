const CHANGE_DASHBOARD_STYLE = 'CHANGE_DASHBOARD_STYLE';
const SET_APP_ID = 'SET_APP_ID';
const SET_USER_ID = 'SET_USER_ID';
const SET_APP_LOGS = 'SET_APP_LOGS';
const IS_NEW_APP = 'IS_NEW_APP';
const RESET_LOG = 'RESET_LOG';
const SET_ACTIVE_JOB_APP = 'SET_ACTIVE_JOB_APP';

export const  setDashboardStyle= (style)=>(dispatch)=>{
    dispatch({type:CHANGE_DASHBOARD_STYLE,payload:style});
}

export const  setUserId= (id)=>(dispatch)=>{
    dispatch({type:SET_USER_ID,payload:id});
}

export const  setAppId= (id)=>(dispatch)=>{
    dispatch({type:SET_APP_ID,payload:id});
}

export const  setAppLog= (logs)=>(dispatch)=>{
    dispatch({type:SET_APP_LOGS,payload:logs});
}

export const  resetLogState= ()=>(dispatch)=>{
    dispatch({type:RESET_LOG});
}

export const  setIsNewApp= (isNewApp)=>(dispatch)=>{
    dispatch({type:IS_NEW_APP,payload:isNewApp});
}


export const  setActiveJobApp= (jobApps)=>(dispatch)=>{
    dispatch({type:SET_ACTIVE_JOB_APP,payload:jobApps});
}



