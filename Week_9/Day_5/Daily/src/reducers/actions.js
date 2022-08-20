const SEARCH_MOVIE = 'SEARCH_MOVIE';
const FETCH_MOVIES = 'FETCH_MOVIES';
const FETCH_MOVIE = 'FETCH_MOVIE';
// const LOADING = 'LOADING';


export const  searchMovie = (value)=>(dispatch)=>{
    dispatch({type:SEARCH_MOVIE,payload:value})
}


export const  fetchMovie = (value)=>(dispatch)=>{
    
    fetch (`http://www.omdbapi.com/?apikey=193d3791&i=${value}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        dispatch({type:FETCH_MOVIE,payload:data})
    })
  
}

export const  fetchMovies = (value)=>(dispatch)=>{
    fetch (`http://www.omdbapi.com/?apikey=193d3791&s=${value}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data.Search);
        dispatch({type:FETCH_MOVIES,payload:data.Search})
    })
  
}

// export const  loading = (id,posts)=>(dispatch)=>{
//     const newPosts = posts.filter(post=>post.id!==id)
//     dispatch({type:DEL_POST,payload:newPosts})
// }






