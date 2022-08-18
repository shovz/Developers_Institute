import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleIncrement,
        handleDecrement,
        incrementIfOdd,
        incrementTimer} from '../reducers/actions'

class Counter extends Component{



  render(){
    return (
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
        <h1> Clicked : {this.props.counter} times</h1>
        <button onClick={()=>this.props.dispatch(handleIncrement())}>+</button>
        <button onClick={()=>this.props.dispatch(handleDecrement())}>-</button>
        <button onClick={()=>this.props.dispatch(incrementIfOdd(this.props.counter))}>increment If Odd</button>
        <button onClick={()=>this.props.dispatch(incrementTimer())}>increment async</button>
      </div>

    );
  }
}
 
const mapStateToProps=(state)=>{
    return {
      counter:state.counter
    }
  }


export default  connect(mapStateToProps)(Counter);

