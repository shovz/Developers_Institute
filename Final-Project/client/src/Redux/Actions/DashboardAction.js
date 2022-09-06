const CHANGE_DASHBOARD_STYLE = 'CHANGE_DASHBOARD_STYLE';
const SET_APP_ID = 'SET_APP_ID';
const SET_USER_ID = 'SET_USER_ID';

export const  setDashboardStyle= (style)=>(dispatch)=>{
    dispatch({type:CHANGE_DASHBOARD_STYLE,payload:style});
}


export const  setUserId= (id)=>(dispatch)=>{
    // console.log('shoval set app id', id);
    dispatch({type:SET_USER_ID,payload:id});
}

export const  setAppId= (id)=>(dispatch)=>{
    // console.log(id);
    dispatch({type:SET_APP_ID,payload:id});
}
