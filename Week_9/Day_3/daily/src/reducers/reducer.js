const initState = {
    robots : [],
    search:""
}




export const reducer = ((state=initState,action={})=>{
    switch (action.type) {
        case 'GET_ROBOTS':
            return {...state,robots:action.payload}
        default:
            return {...state}
    }

})

