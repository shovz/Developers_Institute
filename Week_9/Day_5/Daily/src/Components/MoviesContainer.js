import React, { Component } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard';

class MoviesContainer extends Component{

  render(){
    return (
      <div style={{display:'grid',width:'1200px',margin:'auto',
      justifyContent:'center',alignItems:'center',
      gridTemplateColumns:'repeat(4,1fr)'}}>
        {
          this.props.movies.map((item,i)=>{
            // console.log(item);
            return (
              <MovieCard key={i} movie={item}/>
            )
          })
        }
    </div>
    );
  }
}
 
const mapStateToProps=(state)=>{
  return {
    movies : state.movies
  }
}

export default  connect(mapStateToProps)(MoviesContainer);

