import React, { Component } from 'react';
import Garage from './Garage';

class Car extends Component{
  constructor (props){
    super();
    this.state = {
        color : props.carinfo.color,
        model : props.carinfo.model,
        name: props.carinfo.name
    };
  }
  render(){
    return (
      <header>
        <h1>this car is {this.state.color} {this.state.name}  {this.state.model}   </h1>
        <Garage size="small" />
      </header>

          

    );
  }
}
export default Car;
