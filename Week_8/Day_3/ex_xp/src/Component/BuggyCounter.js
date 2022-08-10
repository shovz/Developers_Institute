import React, { Component } from 'react';

class BuggyCounter extends Component{
    constructor() {
        super();
        this.state = {
          counter:0
        }
      }
  handleClick=()=>{
    this.setState({counter:this.state.counter+1})
    console.log(this.state.counter);

    // console.log("clicked");
  }
  render(){
    if(this.state.counter>5){
        throw new Error('counter is above 5'); 
    }
    return (
      <div>
            <button onClick={this.handleClick}>click</button>
      </div>

       

    );
  }
}
export default BuggyCounter;
