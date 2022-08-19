import React, { Component } from 'react';
import {Routes, Route,BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About'
import Contact from './Components/Contact';
import Post from './Components/Post';
import './App.css';


class App extends Component{




  render(){
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar/>
              <Routes>
                <Route path="/" element={< Home/>} />
                <Route path="/About" element={< About/>} />
                <Route path="/Contact" element={< Contact/>} />
                <Route path={`/${this.props.post_id}`} element={<Post/>} />
              </Routes>
          </div>
      </BrowserRouter>
    );
  }
}
 
const mapStateToProps=(state)=>{
    return {
      post_id  : state.post_id 
    }
  }


export default  connect(mapStateToProps)(App);

