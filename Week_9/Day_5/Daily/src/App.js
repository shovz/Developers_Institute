import React, { Component } from 'react';
import {Routes, Route,BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Movie from './Components/Movie';
import Footer from './Components/Footer';
import './App.css';


class App extends Component{




  render(){
    return (
      <BrowserRouter>
          <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Landing/>} />
                <Route path="/movie/:id" element={<Movie/>} />
                
            </Routes>
            <Footer />
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

