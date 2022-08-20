import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';

class Searched extends Component{

  render(){
    return (
      <div>
        <h1>{this.props.search}</h1>
        <div className='photos_grid'>
          {
            
            this.props.photos.map((photo,index)=>{
              return (
                  <img alt='Searched' 
                  key={index} 
                  style={{height:'150px',width:'150px'}} 
                  src={photo.src.original}/>
              )
            })
          }
        </div>
    </div>
    );
  }
}
 
const mapStateToProps=(state)=>{
  return {
    photos : state.photos,
    search:state.search
  }
}

export default  connect(mapStateToProps)(Searched);

