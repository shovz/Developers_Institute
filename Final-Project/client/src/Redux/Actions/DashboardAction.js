const SET_JOB_APP_DISPLAY = 'SET_JOB_APP_DISPLAY';


export const  setJobAppDisplay= (display)=>(dispatch)=>{
    dispatch({type:SET_JOB_APP_DISPLAY,payload:display});
}

