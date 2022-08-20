const initState = {
    text: '',
    movies: [],
    loading: false,
    movie: []
    
}





export const reducer = ((state=initState,action={})=>{
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return {...state,text:action.payload}
        case 'FETCH_MOVIES':
            return {...state,movies:action.payload}
        case 'FETCH_MOVIE':
            return {...state,movie:action.payload}
        case 'LOADING':
            return {...state,posts:action.payload}
        default:
            return {...state}
    }

})

