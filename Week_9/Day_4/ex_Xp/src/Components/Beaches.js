import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../App.css';

class Beaches extends Component{

  render(){
    return (
      <div>
        <h1>Beaches</h1>
        <div className='photos_grid'>
          {
            this.props.photos.map((photo,index)=>{
              return (
                  <img alt='Beaches' 
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
    photos : state.photos
  }
}

export default  connect(mapStateToProps)(Beaches);

