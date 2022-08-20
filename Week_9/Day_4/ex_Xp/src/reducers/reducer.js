const initState = {
        text: '',
    movies: [],
    loading: false,
    movie: []

}





export const reducer = ((state=initState,action={})=>{
    switch (action.type) {
        case 'SEARCH_MOVIE':
            return {...state ,search:action.payload}
        case 'FETCH_MOVIES':
            return {...state ,photos:action.payload}
        case 'FETCH_MOVIE':
            return {...state ,search:action.payload}
        case 'LOADING':
            return {...state ,photos:action.payload}
        default:
            return {...state}
    }

})

