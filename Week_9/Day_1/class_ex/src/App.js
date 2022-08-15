import React, { Component } from 'react';
import "./App.css"
import {connect} from 'react-redux';
// import Three from './Component/Three';
import One from './Component/One';
import Two from './Component/Two';
import {handleChangeAction,handleClickAction} from './redux/actions'


class App extends Component{
  constructor() {
    super();
    this.state = {
      one: "bla bla",
      two: "plo plo"
  
    }
  }


  change=(e)=>{

      this.setState({one: e.target.value})

  }

  click=()=>{

    this.setState({two: this.state.one})

}
  render(){

    return (
      <div className='main'>
        {/* <div>
            <h2>prop one is : {this.state.one}</h2>
            <input onChange={this.change}/>
        </div> */}
        <div>
            <h2>prop asdasd : {this.props.a}</h2>
            <input onChange={this.props.change}/>
        </div>

        {/* <div>
            <h2> prop two is : {this.state.two}</h2>
            <button onClick={this.click}>change prop 2</button>
        </div> */}

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

