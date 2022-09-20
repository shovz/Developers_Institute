import { combineReducers } from 'redux'


const initState = {
    accessToken : JSON.parse(localStorage.getItem('accessToken'))|| '',
    profile: JSON.parse(localStorage.getItem('profile')),
    dashboard_display_style:'none',
    IsNewApp: true,
    stages:['Applied', 'HR', 'Technical','Offer'],
    app_logs:[],
    active_jobApps: JSON.parse(localStorage.getItem('activeJobs'))|| [],
}

const jobAppInfo={
        user_id: 1,
        application_id: 1,
        company: '',
        active: true,
        salary: '',
        post_url: '',
        website: '',
        position: '',
        job_description: '',
        location: '',
        createdat: new Date().toISOString().slice(0, 19).replace('T', ' '),
        endedat: new Date().toISOString().slice(0, 19).replace('T', ' '),
        method: '',
        stage: 'Applied',
        log_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
        notes: '',
        assignment: false,
        assignment_date:new Date().toISOString().slice(0, 19).replace('T', ' '),
        completed_ass: false,
        rejected: false,
        refused: false,
        reason: '',
        offer: '',
        offer_details: '',
        contact_fname: '',
        contact_lname: '',
        contact_pos:'',
        contact_email: '',
        contact_linkedin: '',
        contact_phone: ''
}



 const setJobApp = ((state=jobAppInfo,action={})=>{
    switch (action.type) {
        case 'SET_USER_ID':
            return {...state ,user_id:action.payload}
        case 'SET_APP_ID':
             return {...state ,application_id:action.payload}
        case 'CHANGE_COMPANY':    
            return {...state ,company:action.payload}
        case 'CHANGE_ACTIVE':
            return {...state ,active:action.payload}
        case 'CHANGE_SALARY':
            return {...state ,salary:action.payload}
        case 'CHANGE_POST_URL':
             return {...state ,post_url:action.payload}
        case 'CHANGE_WEBSITE':    
            return {...state ,website:action.payload}
        case 'CHANGE_POSITION':
            return {...state ,position:action.payload}
        case 'CHANGE_JOB_DESC':
            return {...state ,job_description:action.payload}
        case 'CHANGE_LOCATION':
            return {...state ,location:action.payload}
        case 'CHANGE_CREATED_DATE':    
            return {...state ,createdat:action.payload}
        case 'CHANGE_ENDED_DATE':
            return {...state ,endedat:action.payload}
        case 'CHANGE_METHOD':
            return {...state ,method:action.payload}
        case 'CHANGE_STAGE':
            return {...state ,stage:action.payload}
        case 'CHANGE_LOG_DATE':    
            return {...state ,log_date:action.payload}
        case 'CHANGE_ASSIGNMENT':
            return {...state ,assignment:action.payload}  
        case 'CHANGE_ASS_DATE':
            return {...state ,assignment_date:action.payload}
        case 'CHANGE_COMPLETED_ASS':
            return {...state ,completed_ass:action.payload}
        case 'CHANGE_REJECTED':
            return {...state ,rejected:action.payload}
        case 'CHANGE_REFUSED':    
            return {...state ,refused:action.payload}
        case 'CHANGE_REASON':
            return {...state ,reason:action.payload}             
        case 'CHANGE_OFFER':    
            return {...state ,offer:action.payload}
        case 'CHANGE_OFFER_DETAILS':
            return {...state ,offer_details:action.payload}  
        


        case 'CHANGE_CONTACT_FNAME':
            return {...state ,contact_fname:action.payload}  
        case 'CHANGE_CONTACT_LNAME':
            return {...state ,contact_lname:action.payload}
        case 'CHANGE_CONTACT_POS':
            return {...state ,contact_pos:action.payload}
        case 'CHANGE_CONTACT_EMAIL':
            return {...state ,contact_email:action.payload}
        case 'CHANGE_CONTACT_LINKEDIN':
            return {...state ,contact_linkedin:action.payload}
        case 'CHANGE_CONTACT_PHONE':    
            return {...state ,contact_phone:action.payload}


        case 'CHANGE_NOTES':    
          return {...state ,notes:action.payload}

        case 'RESET':
            console.log('action.payload',action.payload);
          return {...jobAppInfo,application_id:action.payload}
        default:
            return {...state}
    }

})



const setInitState = ((state=initState,action={})=>{
    // console.log('shoval setInitState');
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return {...state ,accessToken:action.payload}
        case 'CHANGE_DASHBOARD_STYLE':
            return {...state ,dashboard_display_style:action.payload}
        case 'IS_NEW_APP':
            return {...state ,IsNewApp:action.payload}
        case 'SET_APP_LOGS':
            return {...state ,app_logs:action.payload}
        case 'RESET_LOG':
            return {...state ,app_logs:[]}
        default:
            return {...state}
    }

})



export const reducer =  combineReducers({
    setJobApp,
    setInitState,
  })

