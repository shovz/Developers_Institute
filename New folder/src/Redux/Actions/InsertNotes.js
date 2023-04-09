const CHANGE_NOTES = 'CHANGE_NOTES';

export const  setNotes= (note)=>(dispatch)=>{
    dispatch({type:CHANGE_NOTES,payload:note});
}
