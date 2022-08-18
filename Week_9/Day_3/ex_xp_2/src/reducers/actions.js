const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const  handleIncrement = ()=>{
    return {
        type: INCREMENT
    }
}

export const  handleDecrement =()=>{
   return {
    type: DECREMENT
}
}



