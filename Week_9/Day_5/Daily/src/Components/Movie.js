import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
class Movie extends Component{

  render(){
    console.log(this.props);
    const movie = this.props.movie
    return (
      <div>
        <div style={{display:'flex',justifyContent:'center',margin:'30px'}}>
          <div style={{padding:'10px',boxShadow:'0 0 5px grey',margin:'0 30px'}}>
            <img style={{height:'400px',width:'auto'}} alt={movie.title} src={movie.Poster}/>
          </div>
          <div>
            <h2>{movie.Title}</h2>
            <h4>Genre : {movie.Genre}</h4>
            <h4>Released : {movie.Released}</h4>
            <h4>IMDB Rating : {movie.imdbRating}</h4>
            <h4>Director : {movie.Director}</h4>
            <h4>Writer : {movie.Writer}</h4>
            <h4>Actors : {movie.Actors}</h4>
          </div>
        </div>
        <div style={{width:'800px',margin:'30px auto',backgroundColor:'darkgrey',height:'200px'}}>
          <h1>About</h1>
          <p>{movie.Plot}</p>
          <div style={{margin:'40px'}}>
            <a style={{textDecoration:'none', color:'white',margin:'20px',
            backgroundColor:'lightblue',padding:'10px'}} 
            href={`https://www.imdb.com/title/${movie.imdbID}/`}>View more on Imdb</a>
            <Link style={{textDecoration:'none',color:'black'}} to='/'>Back to Search</Link>
          </div>
        </div>
    </div>
    );
  }
}
 
const mapStateToProps=(state)=>{
  return {
    movie : state.movie
  }
}

export default  connect(mapStateToProps)(Movie);

