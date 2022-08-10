import React, { Component } from 'react';


class Color extends Component{
  constructor (props){
    super();
    this.state = {
        favoriteColor:"red"
    };
  }

  componentDidMount(){
    setTimeout(()=>{
        this.setState({favoriteColor:"yellow"})
    },5000)
  }
  render(){
    return (
      
        <h1>my fav color is {this.state.favoriteColor}  </h1>
        
      

          

    );
  }
  
}
export default Color;
