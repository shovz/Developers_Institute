const CHANGE_NOTES = 'CHANGE_NOTES';

export const  setContact_phone= (note)=>(dispatch)=>{
    dispatch({type:CHANGE_NOTES,payload:note});
}
