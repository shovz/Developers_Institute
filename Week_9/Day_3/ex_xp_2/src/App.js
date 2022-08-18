import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleIncrement, handleDecrement} from './reducers/actions'

class App extends Component{



  render(){
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <h1> your age : {this.props.age} </h1>
        <button onClick={()=>this.props.ageUP()}>+</button>
        <button onClick={()=>this.props.ageDown()}>-</button>
      </div>

    );
  }
}
 
const mapStateToProps=(state)=>{
    return {
      age:state.age
    }
  }

  const mapDispatchToProps=(dispatch)=>{
    return {
      ageUP : ()=> dispatch(handleIncrement()),
      ageDown : ()=> dispatch(handleDecrement()),
    }
  }

export default  connect(mapStateToProps,mapDispatchToProps)(App);

