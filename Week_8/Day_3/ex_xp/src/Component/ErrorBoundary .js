import React, { Component } from 'react';

class ErrorBoundary extends Component{
  constructor(){
    super();
    this.state={
        error: null
    }
  } 

   
  componentDidCatch(error,errorinfo){
    this.setState({error:true})
    console.log(error,errorinfo);
  }
  render(){
    {
        if (this.state.error) {
            return (
                <div>
                    <p>Something went wrong...</p><br></br>
                </div>
            )
        }

        return this.props.children;
    }
  }
}
export default ErrorBoundary;
