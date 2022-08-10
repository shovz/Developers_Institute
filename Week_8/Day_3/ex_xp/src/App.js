import React, { Component } from 'react';
import BuggyCounter from './Component/BuggyCounter';
import ErrorBoundary from './Component/ErrorBoundary ';
import Update from './Component/Update';
import './App.css';

class App extends Component{
  
  render(){
    return (
      <div>

        {/* Exercise 1 : React Error Boundary Simulation 1*/}
        <ErrorBoundary>
            <BuggyCounter/>
              <BuggyCounter/>
        </ErrorBoundary><br/>


        {/* Exercise 1 : React Error Boundary Simulation 2*/}
        <ErrorBoundary>
              <BuggyCounter/>
        </ErrorBoundary>
        <ErrorBoundary>
              <BuggyCounter/>
        </ErrorBoundary>
        <br/><br/>

        {/* Exercise 1 : React Error Boundary Simulation 31*/}
        
        <BuggyCounter/>


        {/* Exercise 2 : Lifecycle */}
        <Update/>

      </div>

       

    );
  }
}
export default App;
