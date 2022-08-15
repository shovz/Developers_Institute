import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleDecreaseAction,handleIncreaseAction} from './redux/actions';


class App extends Component{

  render(){

    return (
      <div style={{display: 'flex', margin:'30px auto',justifyContent:'center',height:'30px',alignItems:'center'}}>
          <button style={{margin:'0 20px'}} onClick={()=>this.props.decrease()}>-</button>
          <h1>{this.props.counter}</h1>
          <button style={{margin:'0 20px'}} onClick={()=>this.props.increase()}>+</button>
      </div>




    );
  }
}

const mapStateToProps=(state)=>{
  return {
    counter:state.count,
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    decrease: () => dispatch(handleDecreaseAction()),
    increase: () => dispatch(handleIncreaseAction())
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(App);

