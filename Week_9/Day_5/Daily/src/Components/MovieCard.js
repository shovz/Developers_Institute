import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import {fetchMovie} from'../reducers/actions'

class MovieCard extends Component{

  render(){
    const movie= this.props.movie
    return (
      // console.log(this.props.movie)
            <div style={{boxShadow:'0 0 6px grey',
              width:'270px',height:'450px',padding:'15px',margin:'15px'}}>
                <img alt='movie' 
                      style={{height:'300px',width:'auto'}} 
                      src={movie.Poster}/>
                <h3>{movie.Title}</h3>
                <h3>{movie.Year}</h3>
                <Link to={`/movie/:${movie.imdbID}`}
                onClick={()=>this.props.moreDetails(movie.imdbID)}>
                     <button>more details</button>
                  </Link>
              </div>
    );
  }
}
 

const mapDispatchToProps=(dispatch)=>{
  return {
    moreDetails : (imdbID) => dispatch(fetchMovie(imdbID)),

  }
}
export default  connect(null,mapDispatchToProps)(MovieCard);

