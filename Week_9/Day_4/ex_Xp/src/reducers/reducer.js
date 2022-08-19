const initState = {
    photos:[],
    search: ""

}





export const reducer = ((state=initState,action={})=>{
    switch (action.type) {
        case 'SEARCH_INPUT':
            return {...state ,search:action.payload}
        case 'GET_PHOTOS':
            return {...state ,photos:action.payload}
        default:
            return {...state}
    }

})

