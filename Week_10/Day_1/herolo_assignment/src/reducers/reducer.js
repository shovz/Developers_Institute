const initState = {
    current_condition:JSON.parse(localStorage.getItem("current_conditions"))[0]||[],
    city_key:'215854',
    city: "Tel Aviv",
    searched_city:"Tel Aviv",
    fav_cities:[]
}





export const reducer = ((state=initState,action={})=>{
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {...state,city:action.payload}
        case 'GET_LOC_KEY':
            return {...state,city_key:action.payload,searched_city:state.city.toLocaleUpperCase()}
        case 'CURRENT_CONDITION':
            return {...state,current_condition:action.payload}
        case 'FORCAST':
            return {...state}
        case 'ADD_TO_FAV':
            let a = state.fav_cities
            a.push(action.payload)
            return {...state,fav_cities:a}
        default:
            return {...state}
    }

})

