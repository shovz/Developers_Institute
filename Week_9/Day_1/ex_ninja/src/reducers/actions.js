export const  handleSetInput=(input)=>{
    return{
        type: 'SET_input',
        payload: input
    }
}


export const  handleAddTodo =(task)=>{
    return{
        type: 'ADD_TASK',
        payload: task
    }
}

export const  handleSetAtt=(Att)=>{
    return{
        type: 'SET_ATT',
        payload: Att
    }
}

export const  handleToggleTask=(task)=>{
    return{
        type: 'TOGGLE_TASK',
        payload: task
    }
}