import React, { Component } from 'react';

class Footer extends Component{

  render(){
    return (
      <div style={{display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  backgroundColor:'darkgray',
                  height:'50px'}}>
        <h3>
          Using React JS & Redux JS integrated  with external movies data API 
          <a href="http://www.omdbapi.com/">omdb</a>
        </h3>
        
    </div>
    );
  }
}
 
export default  Footer;

