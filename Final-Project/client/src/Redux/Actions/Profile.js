const SET_PROFILE = 'SET_PROFILE';


export const  setprofile= (profile_data)=>(dispatch)=>{
    dispatch({type:SET_PROFILE,payload:profile_data});
}


