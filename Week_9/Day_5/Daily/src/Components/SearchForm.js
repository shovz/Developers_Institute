import React, { Component } from 'react';
import {connect} from 'react-redux';
import {searchMovie,fetchMovies} from '../reducers/actions';

class SearchForm extends Component{

  render(){
    return (
      <div>
        <div style={{width:'1000px',height:'250px',margin:'30px auto',
        boxShadow:'0 0 5px gray',display:'flex',flexDirection:'column',alignItems:'center'}}>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <img style={{height:'40px',margin:'0 10px'}} alt='search' 
            src='https://static.vecteezy.com/system/resources/previews/002/272/237/original/search-icon-simple-free-illustration-free-vector.jpg'/>
            <h2>Search for a movie ,TV series ..</h2>
          </div>
          <input 
            onChange={(e)=>this.props.search(e.target.value)} 
            style={{width:'50%',height:'40px'}} 
            type='text'
            placeholder='Search for a movie ,TV series ..'/>
          <button onClick={()=>this.props.send(this.props.text)} style={{margin:'20px '}}>Search</button>
        </div>
 
    </div>
    );
  }
}
 
const mapStateToProps=(state)=>{
  return {
    text : state.text
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    search : (value)=> dispatch(searchMovie(value)),
    send : (value)=> dispatch(fetchMovies(value)) 
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(SearchForm);

