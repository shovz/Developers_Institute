const CHANGE_INPUT = 'CHANGE_INPUT';
const GET_LOC_KEY = 'GET_LOC_KEY';
const CURRENT_CONDITION= 'CURRENT_CONDITION';
const FORCAST = 'FORCAST';
const ADD_TO_FAV = 'ADD_TO_FAV';
const API_KEY = 'YJO3YlsMOfLA3SzDvnqEMkhJ8iacciGR'
let locations_searched = JSON.parse(localStorage.getItem("locations_searched"))|| []
let forcast =JSON.parse(localStorage.getItem("searched_forcast"))|| []
let current_conditions =JSON.parse(localStorage.getItem("current_conditions"))|| []


export const  changeInput = (city)=>(dispatch)=>{
    dispatch({type:CHANGE_INPUT, payload:city})
}

export const  getLocationKey = (city)=>(dispatch)=>{
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${city}`)
    .then(res=>res.json())
    .then(location=>{
        dispatch(getCurrentCondition(location[0].Key))
        dispatch(getForcast(location[0].Key))
        console.log(location);
        locations_searched.push(location);
        localStorage.setItem('locations_searched',JSON.stringify(locations_searched))
        dispatch({type:GET_LOC_KEY, payload:location[0].Key})
    })
    .catch(err=>console.log(err))
}


export const  getCurrentCondition = (city_key)=>(dispatch)=>{
    fetch(`http://dataservice.accuweather.com/currentconditions/v1/${city_key}?apikey=${API_KEY}`)
    .then(res=>res.json())
    .then(conditions=>{
        current_conditions.push(conditions);
        localStorage.setItem('current_conditions',JSON.stringify(current_conditions))
        dispatch({type:CURRENT_CONDITION,payload:conditions})
    })
    .catch(err=>console.log(err))
}

export const  getForcast= (city_key)=>(dispatch)=>{
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${city_key}?apikey=${API_KEY}`)
    .then(res=>res.json())
    .then(conditions=>{
        forcast.push(conditions);
        localStorage.setItem('searched_forcast',JSON.stringify(forcast))
        dispatch({type:FORCAST,payload:conditions})
    })
    .catch(err=>console.log(err))
}

export const  addToFav = (city)=>(dispatch)=>{
    console.log(city);
    dispatch({type:ADD_TO_FAV, payload:city})
}




