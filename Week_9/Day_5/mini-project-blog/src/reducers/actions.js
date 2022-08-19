const GET_POST = 'GET_POST';
const DEL_POST = 'DEL_POST';


export const  getPost = (id)=>{
    return({
        type: GET_POST,
        payload:id
    })
}


export const  deletetPost = (id,posts)=>(dispatch)=>{
    const newPosts = posts.filter(post=>post.id!==id)
    dispatch({type:DEL_POST,payload:newPosts})
}







