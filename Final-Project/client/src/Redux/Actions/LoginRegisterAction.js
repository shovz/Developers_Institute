const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
const IS_SIGNED_IN = 'IS_SIGNED_IN';


export const  setAccessToken= (accessToken)=>(dispatch)=>{
    dispatch({type:SET_ACCESS_TOKEN,payload:accessToken});
}



export const  isSignedIn = (value)=>(dispatch)=>{
    dispatch({type:IS_SIGNED_IN,payload:value});
}



