export const  handleInputChange  =(input,name)=>{
    return{
        type: 'INPUT_CHANGE',
        payload: {
            input,
            name
        }
    }
}

export const  handleInsert =(data)=>{
    return{
        type: 'INSERT',
        payload: data
    }
}


export const   handleEdit   =(index)=>{
    return{
        type: 'EDIT',
        payload: index
    }
}

export const  handleDelete   =(id)=>{
    return{
        type: 'DELETE',
        payload: id
    }
}

