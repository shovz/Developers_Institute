const GET_PHOTOS = 'GET_PHOTOS';
const SEARCH_INPUT = 'SEARCH_INPUT'

export const  searchFiled = (value)=>{
    return({
        type: SEARCH_INPUT,
        payload: value
    })
}






export const  getPhotosCategory = (value)=>(dispatch)=>{
    fetch(`https://api.pexels.com/v1/search?query=${value}&per_page=30`,{
        method:'GET',
        headers:{
            Accept: 'application/json',
            Authorization: '563492ad6f917000010000018225dcb9e20d469187b1dcf25a15357c'
        }
    })

    .then(res=>res.json())
    .then(data=>
        {
            dispatch({type:GET_PHOTOS, payload:data.photos})
        })
}



