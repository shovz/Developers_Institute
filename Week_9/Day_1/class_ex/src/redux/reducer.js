const initState = {
    prop_one: 'one from store',
    prop_two: 'two from store',
    one_one: '123'
}


export const reducer = ((state=initState,action={})=>{
    switch (action.type) {
        case 'CHANGE_PROP_ONE':
            return {...state, prop_one:action.payload}
        case 'CHANGE_PROP_TWO':
            return {...state, prop_two:state.prop_one}   
        case 'CHANGE_ONE':
            return {...state, one_one:action.payload}   
        default:
            return {...state}
    }

})