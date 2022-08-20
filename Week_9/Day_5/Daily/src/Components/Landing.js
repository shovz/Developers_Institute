import React, { Component } from 'react';
import SearchForm from './SearchForm';
import MoviesContainer from './MoviesContainer';

class Landing extends Component{

  render(){
    return (
      <div>
        <SearchForm/>
        <MoviesContainer/>
    </div>
    );
  }
}
 


export default  Landing;

