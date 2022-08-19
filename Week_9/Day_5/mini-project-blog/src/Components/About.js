import React from 'react';
import {connect} from 'react-redux';

function About(props) {
  return (
    <div>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Recusandae repudiandae repellat illo magni eligendi cupiditate 
        voluptates eius nam voluptate. Incidunt nihil ullam quae quia 
        officia quaerat, deserunt eligendi explicabo totam?
        </p>
    </div>
  )
}
 
const mapStateToProps=(state)=>{
  return {
    photos : state.photos,
    search:state.search
  }
}

export default  connect(mapStateToProps)(About);

