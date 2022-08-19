import React, { Component } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import {connect} from 'react-redux';
import Mountain from './Components/Mountain';
import Beaches from './Components/Beaches';
import Birds from './Components/Birds';
import Food from './Components/Food';
import Searched from './Components/Searched';
import {getPhotosCategory,searchFiled} from './reducers/actions'
import './App.css';


class App extends Component{




  render(){
    return (
      <div className="App">
        <input 
        onChange={(e)=>this.props.dispatch(searchFiled(e.target.value))}
         type="text"/>
        <Link to={`/${this.props.search}`}>  <button style={{marginBottom:'30px'}}
          onClick={()=>this.props.dispatch(getPhotosCategory(this.props.search))}>search</button>
         </Link>
        <nav>
          <Link className="navItem" to='/Mountain' 
          onClick={()=>this.props.dispatch(getPhotosCategory('Mountain'))}>Mountain</Link>

          <Link className="navItem" to='/Beaches'
          onClick={()=>this.props.dispatch(getPhotosCategory('Beaches'))}>Beaches</Link>

          <Link className="navItem" to='/Birds'
          onClick={()=>this.props.dispatch(getPhotosCategory('Birds'))}>Birds</Link>

          <Link className="navItem" to='/Food'
          onClick={()=>this.props.dispatch(getPhotosCategory('Food'))}>Food</Link>
          
        </nav>
      <Routes>
        <Route path="/Mountain" element={<Mountain />} />
        <Route path="/Beaches" element={<Beaches />} />
        <Route path="/Birds" element={<Birds />} />
        <Route path="/Food" element={<Food />} />
        <Route path={`/${this.props.search}`} element={<Searched />} />
      </Routes>
    </div>
    );
  }
}
 
const mapStateToProps=(state)=>{
    return {
      search : state.search
    }
  }


export default  connect(mapStateToProps)(App);

