import {connect} from 'react-redux';
import {handleSelectMovie} from '../redux/actions';

const MovieList=(props)=>
{
  return (
    <div style={{textAlign:"center"}}>
        <h1>Redux Movies</h1>
        <div style={{display: 'flex',margin:"auto",justifyContent:"center"}}>
            <div style={{margin:"0 100px"}}>
            <h1>movie list</h1>
                <div >
                {
                    props.movie_list.map((item ,index)=> {
                    return(
                        <div key={index}>
                            <h2   >{item.title}</h2>
                            <button onClick={()=>props.selectMovie(item)}> details</button>
                        </div>
                    )
                    })
                }
                </div>
            </div>

            <div>
            <h1>Movie</h1>
                <h2>movie title: <br/><br/>{ props.title} </h2>
                <h2>movie releaseDate:  <br/><br/>{props.releaseDate}</h2>
                <h2>movie ratings:  <br/><br/>{props.rating} </h2>
            </div>
         </div>
    </div>
  )
}
 
const mapStateToProps=(state)=>{
    return {
      movie_list:state.moviesReducer,
      title: state.selectedMovieReducer.title,
      releaseDate: state.selectedMovieReducer.releaseDate,
      rating: state.selectedMovieReducer.rating,
    }
  }

const mapDispatchToProps=(dispatch)=>{
    return {
      selectMovie: (movie) => dispatch(handleSelectMovie(movie)),
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(MovieList);