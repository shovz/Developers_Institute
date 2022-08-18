const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const  handleIncrement = ()=> (dispatch)=>{
    dispatch({type: INCREMENT})
}

export const  handleDecrement =()=>(dispatch)=>{
    dispatch({type: DECREMENT})
}

export const  incrementIfOdd =(value)=>(dispatch)=>{
    if(value%2===1){
        dispatch({type: INCREMENT})
    }
    
}

export const  incrementTimer=()=>(dispatch)=>{
    setTimeout(() => {
        dispatch({type: INCREMENT})
    }, 1000);
       
    
    
}


