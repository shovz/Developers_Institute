export const  handleChangeAction =(value)=>{
    return{
        type:'CHANGE_PROP_ONE',
        payload:value
    }
}

export const  handleClickAction =()=>{
    return{
        type:'CHANGE_PROP_TWO'
    }
}


export const  changeOne =(value)=>{
    console.log(value);
    return{
        type:'CHANGE_ONE',
        payload :value
    }
}