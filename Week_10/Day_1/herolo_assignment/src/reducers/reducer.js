const initState = {
    current_condition:JSON.parse(localStorage.getItem("current_conditions"))[0]||[],
    forcast:JSON.parse(localStorage.getItem("searched_forcast"))[0]||[],
    city_key:'215854',
    city: "Tel Aviv",
    searched_city:"Tel Aviv",
    fav_cities:[],
    fav_icon:false
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
            return {...state,forcast:action.payload}
        case 'ADD_TO_FAV':
            let five_days_forcasr = state.fav_cities
            five_days_forcasr.push(action.payload)
            return {...state,fav_cities:five_days_forcasr}
        default:
            return {...state}
    }

})

