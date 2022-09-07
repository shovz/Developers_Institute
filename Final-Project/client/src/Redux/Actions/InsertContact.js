const CHANGE_CONTACT_FNAME = 'CHANGE_CONTACT_FNAME';
const CHANGE_CONTACT_LNAME = 'CHANGE_CONTACT_LNAME';
const CHANGE_CONTACT_POS = 'CHANGE_CONTACT_POS';
const CHANGE_CONTACT_EMAIL = 'CHANGE_CONTACT_EMAIL';
const CHANGE_CONTACT_LINKEDIN = 'CHANGE_CONTACT_LINKEDIN';
const CHANGE_CONTACT_PHONE = 'CHANGE_CONTACT_PHONE';


export const  setContactFname= (fname)=>(dispatch)=>{
    dispatch({type:CHANGE_CONTACT_FNAME,payload:fname});
}

export const  setContactLname= (lname)=>(dispatch)=>{
    dispatch({type:CHANGE_CONTACT_LNAME,payload:lname});
}

export const  setContactPos= (pos)=>(dispatch)=>{
    dispatch({type:CHANGE_CONTACT_POS,payload:pos});
}

export const  setContactEmail= (email)=>(dispatch)=>{
    dispatch({type:CHANGE_CONTACT_EMAIL,payload:email});
}

export const  setContactLinkedin= (link)=>(dispatch)=>{
    dispatch({type:CHANGE_CONTACT_LINKEDIN,payload:link});
}

export const  setContactPhone= (phone)=>(dispatch)=>{
    dispatch({type:CHANGE_CONTACT_PHONE,payload:phone});
}
