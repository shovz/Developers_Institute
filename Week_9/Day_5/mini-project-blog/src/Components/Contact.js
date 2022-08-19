import React from 'react';
import {connect} from 'react-redux';

function Contact(props) {
  return (
    <div>
      <h1>Contact</h1>
      <p></p>
    </div>
  )
}
 
const mapStateToProps=(state)=>{
  return {
    photos : state.photos,
    search:state.search
  }
}

export default  connect(mapStateToProps)(Contact);

