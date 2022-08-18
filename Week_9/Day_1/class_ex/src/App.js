import React, { Component } from 'react';
import "./App.css"
import {connect} from 'react-redux';
// import Three from './Component/Three';
import One from './Component/One';
import Two from './Component/Two';
import {handleChangeAction,handleClickAction} from './redux/actions'


class App extends Component{

  render(){

    return (
      <div className='main'>
        <div>
            <h2>prop asdasd : {this.props.a}</h2>
            <input onChange={this.props.change}/>
        </div>
        <div>
        <h2>prop two : {this.props.b}</h2>
            <button onClick={()=>this.props.change2()}>change prop 2</button>
        </div>
        
        <One/>
        <Two/>
      </div>




    );
  }
}

const mapStateToProps=(state)=>{
  return {
    a:state.prop_one,
    b: state.prop_two
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    change: (e) => dispatch(handleChangeAction(e.target.value)),
    change2: () => dispatch(handleClickAction())
  }
}
export default  connect(mapStateToProps,mapDispatchToProps)(App);

