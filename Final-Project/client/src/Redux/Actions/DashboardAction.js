const SET_JOB_APP_DISPLAY = 'SET_JOB_APP_DISPLAY';


export const  setJobAppDisplay= (display)=>(dispatch)=>{
    console.log(display);
    dispatch({type:SET_JOB_APP_DISPLAY,payload:display});
}

