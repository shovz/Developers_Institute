const RESET = 'RESET';

export const  resetJobApp= (last_app_id)=>(dispatch)=>{
    dispatch({type:RESET,payload:last_app_id});
}
