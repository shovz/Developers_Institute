import React, { Component } from 'react';


class Phone extends Component{
  constructor (props){
    super();
    this.state = {
        brand: "Samsung ",
        model: "Galaxy S20 ",
        color: "black ",
        year: 2020
    };
  }
  changeColor=(event)=>{
    this.setState({color:"red"})
}
  render(){
    return (
      <header>
        <h1>my bla bla {this.state.brand} {this.state.model} {this.state.color}  {this.state.year}   </h1>
        <button onClick={this.changeColor}> changeColor</button>
      </header>

          

    );
  }
}
export default Phone;
