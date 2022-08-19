import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <Link className="brand-logo" to='/' >Blog</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/About' >About</Link>
            </li>
            <li>
              <Link to='/Contact' >Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

    </>
  )
}
 
const mapStateToProps=(state)=>{
  return {
    photos : state.photos,
    search:state.search
  }
}

export default  connect(mapStateToProps)(Navbar);

