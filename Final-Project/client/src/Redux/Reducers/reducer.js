const initState = {
    accessToken : JSON.parse(localStorage.getItem('accessToken'))|| '',
    isSignedIn:false,
    display_JobApp:'none'
}





export const reducer = ((state=initState,action={})=>{
    switch (action.type) {
        case 'SET_ACCESS_TOKEN':
            return {...state ,accessToken:action.payload}
        case 'IS_SIGNED_IN':
            return {...state ,isSignedIn:action.payload}
        case 'SET_JOB_APP_DISPLAY':
            return {...state ,display_JobApp:action.payload}
        default:
            return {...state}
    }

})

