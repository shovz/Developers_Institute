import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRobots,filterRobots} from './reducers/actions'

class App extends Component{



  render(){
    return (
      <div style={{display:"flex",flexDirection:'column',justifyContent:"center",alignItems:"center"}} >
          <button onClick={()=>this.props.dispatch(getRobots())}>get robots</button>
          <input type='text' onChange={(e)=>this.props.dispatch(filterRobots(e.target.value))}/>
          <div style={{display:'flex',flexWrap:'wrap'}}>
        {
            this.props.robots.map(user=>{
              return (
                <div key={user.id}>
                  <img alt = "robots"
                  src = { `https://robohash.org/set=set2/${user.id}?200x200` }/>
                  <h3>{user.name}</h3>
                  <h3>{user.email}</h3>

                </div>
              )
            })
        }
        </div>
      </div>

    );
  }
}
 
const mapStateToProps=(state)=>{
    return {
      robots:state.robots,
      search: state.search
    }
  }


export default  connect(mapStateToProps)(App);

