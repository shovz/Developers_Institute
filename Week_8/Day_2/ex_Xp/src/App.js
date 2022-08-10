import React, { Component } from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';
import './App.css';

const carinfo = {color:"red",name: "Ford", model: "Mustang"};

class App extends Component{
  
  render(){
    return (
      <div>
      <Car carinfo={carinfo} />


      <Events/>
      <Phone/>

      <Color/>
      </div>

       

    );
  }
}
export default App;
