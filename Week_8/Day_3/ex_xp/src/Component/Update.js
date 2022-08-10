import React, { Component } from 'react';

class Update extends Component{
    constructor() {
        super();
        this.state = {
          color:"red",
          show :true
        }
      }

    shouldComponentUpdate(prevProps,prevState){
        if(prevState.color ==="pink"){
            return true
        }
        return false
      }


      componentDidMount=()=>{
        setTimeout(()=>{
            this.setState({color:"yellow"})
        },2000)
      }

      clickme=()=>{
        if(this.state.color==="red"){
            this.setState({color:"pink"})
        }
       else if(this.state.color==="pink"){
            this.setState({color:"blue"})
           }
      }
    render(){
        return (
        <div>
                <h1>my fav color is {this.state.color}</h1>
                <button onClick={this.clickme}>click</button>
        </div>

        

        );
    }
}
export default Update;
