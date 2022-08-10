import React, { Component } from 'react';


class Events extends Component{
    constructor (props){
        super();
        this.state = {
            isToggleOn  : "true"
        };
      }
    clickMe = () => {
        alert("i was clicked")
      }

    handleKeyPress=(event)=>{
        if(event.key === "Enter"){
            console.log("enter");
        }
    }

    toggle=()=>{
        this.state.isToggleOn==="true"? this.setState({isToggleOn:"false"}):this.setState({isToggleOn:"true"})
    }
  render(){
    return (
        <>
            <input onKeyPress={this.handleKeyPress}/><br/><br/>
            <button onClick={this.clickMe} >cick me</button><br/><br/>
        
            <button onClick={this.toggle} >toggle </button><br/><br/>
            <h1> toggle: {this.state.isToggleOn}</h1><br/><br/>
        </>

          

    );
  }
  
}
export default Events;
