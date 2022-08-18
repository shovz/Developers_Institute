import { combineReducers } from 'redux';

const initState = {
    accountNumber: "",
    FSC: "",
    name: "",
    amount: "",
    currentIndex: -1,
    list: JSON.parse(localStorage.getItem('transactions')) || []


}


const inputs = (input,name,state)=>{
    switch (name) {
        case 'accountNumber':
            return {...state,accountNumber: input}
        case 'fsc':
            return {...state,FSC: input}
        case 'name':
            return {...state,name: input}
        case 'amount':
            return {...state,amount: input}      
        default:
            return {...state}
    }

}

const setLocalStorage=(state)=>{
    let transaction = {
        accountNumber : state.accountNumber,
        FSC : state.FSC,
        name : state.name,
        amount : state.amount,
    }
    return {transaction}
}



const transactions = ((state=initState,action={})=>{
    let alltransactions = state.list || [];
    
    switch (action.type) {
        case 'INPUT_CHANGE':
            return inputs(action.payload.input,action.payload.name,state)
        case 'INSERT':
            let transaction = setLocalStorage(state);
             alltransactions.push (transaction);
             localStorage.setItem('transactions', JSON.stringify(alltransactions))
             return alltransactions
        case 'EDIT':
            return 
        case 'DELETE':
            console.log("del",action.payload);
            return {...state}            
        default:
            return {...state}
    }

})


export const reducer = combineReducers ({
    transactions,
    

})

