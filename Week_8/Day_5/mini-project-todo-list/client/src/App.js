import React, { Component } from 'react';
import "./App.css"

class App extends Component{
  constructor() {
    super();
    this.state = {
      tasks: [],
      todo: '',
    }
  }


  addTask=(e)=>{
    e.preventDefault();
    let task = this.state.todo;
      fetch('http://localhost:5000/addTask',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({task})
      })
      .then(res=>res.json())
      .then(data => {
        this.getTasklist();
      })
      .catch(e=>{
        console.log(e);
      })
  }

  getinput=(e)=>{
    this.setState({todo:e.target.value})
  }

  getTasklist=()=>{
    fetch(`http://localhost:5000/?=${this.state.todo}`)
      .then(res=>res.json())
      .then(data => {
        this.setState({tasks:data})
      })
      .catch(e=>{
        console.log(e);
      })
  }

  delTask=(e)=>{
    let task_id = e.target.id
    console.log(e.target.id);
      fetch('http://localhost:5000/delTask',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({id:task_id})
      })
      .then(res=>res.json())
      .then(data => {
        console.log(data);
        this.getTasklist();
      })
      .catch(e=>{
        console.log(e);
      })
  }

  render(){
    return (
      <div className='main'>
        <h1>Todo's</h1>
        <div>
           { 
          //  console.log(this.state.tasks)
            this.state.tasks.map(item => {
              return(
                <div className='task' key={item.id}>
                  <h2 onClick={this.delTask} id={item.id} >{item.task}</h2>
                </div>
              )
            })
           }
        </div>
          <form onSubmit={this.addTask}>
            <label >Add a new todo:</label> <br/>
            <input onChange={this.getinput} type={"text"}/>   
          </form>
      </div>



    );
  }
}
export default App;

