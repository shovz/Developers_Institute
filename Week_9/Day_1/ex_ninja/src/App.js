import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {handleSetInput, handleAddTodo} from '../../src/reducers/actions'
// import Todo from './Components/Todo ';



class App extends Component{
  // constructor(){
  //   super();
  // }
  render(){
    return (
        <div>
            <form>
              {/* <input onChange={()=>this.props.input()} type="text" />
              <button onClick={()=> this.props.add(this.props.task)}> Add Todo</button> */}
              <input type="text"/>
           </form>

          {/* <Todo/> */}
        </div>
     );
  }
}

const mapStateToProps=(state)=>{
  return {
    task: state.task
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    add: (task) => dispatch(handleAddTodo(task)),
    input: (e) => dispatch(handleSetInput(e.target.value))
  }
}

export default  (App);

// connect(mapStateToProps,mapDispatchToProps)