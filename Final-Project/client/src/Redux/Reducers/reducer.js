import { combineReducers } from 'redux'


const initState = {
    accessToken : JSON.parse(localStorage.getItem('accessToken'))|| '',
    dashboard_display_style:'none',
    IsNewApp: true,
    stages:['Applied', 'Hr', 'Techincal','Offer']
}

const jobAppInfo={
        user_id: 1,
        application_id: 1,
        // current_stage: 2,
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
        // interview_id: 1,
        method: '',
        stage: 'applied',
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
        // contact_id: 1,
        contact_fname: '',
        contact_lname: '',
        contact_email: '',
        contact_linkedin: '',
        contact_phone: ''
}

 const setjobApp = ((state=jobAppInfo,action={})=>{
    // console.log('shoval setjobApp');
    switch (action.type) {
    case 'SET_USER_ID':
        return {...state ,user_id:action.payload}
      case 'SET_APP_ID':
        // console.log('shoval action payload',action.payload);
        return {...state ,application_id:action.payload}
      default:
        return state
    }

})

const setInitState = ((state=initState,action={})=>{
    // console.log('shoval setInitState');
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return {...state ,accessToken:action.payload}
        case 'CHANGE_DASHBOARD_STYLE':
            return {...state ,dashboard_display_style:action.payload}
        case 'SET_JOB_INFO':
            return {...state ,IsNewApp:action.payload}
        default:
            return {...state}
    }

})



export const reducer =  combineReducers({
    setjobApp,
    setInitState
  })

