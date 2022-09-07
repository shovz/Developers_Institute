const RESET = 'RESET';

export const  resetJobApp= (appId)=>(dispatch)=>{
    dispatch({type:RESET,payload:appId});
}
