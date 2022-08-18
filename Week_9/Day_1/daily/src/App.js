import React, { Component } from 'react';
import {connect} from 'react-redux';

import MovieList from './Components/MovieList'


class App extends Component{
  constructor() {
    super();
  }


  render(){

    return (
      <div 
      style={{display: 'flex', 
            margin:'30px auto',
            justifyContent:'center',
            alignItems:'center'}}>
              
          <MovieList/>
      </div>




    );
  }
}

const mapStateToProps=(state)=>{
  return {
    counter:state.count,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    selectMovie: () => dispatch(handleSelectMovie()),
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(App);

