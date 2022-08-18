import { combineReducers } from 'redux';

const initState = {
    todo_list: [],
    input: "",


}


 const visibilityFilter  = ((state=initState,action={})=>{
    return 
})

const todos  = ((state=initState,action={})=>{
    switch (action.type) {
        case 'SET_input':
            return {...state, input:action.payload}        
        case 'ADD_TASK':
            return {...state}
        case 'SET_ATT':
            return {...state}
        case 'TOGGLE_TASK':
            return {...state}
        default:
            return {...state}
    }

})


export const reducer = combineReducers ({
    visibilityFilter,
    todos

})

