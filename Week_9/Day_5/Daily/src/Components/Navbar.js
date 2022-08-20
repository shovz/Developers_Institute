import React from 'react';
import { Link } from "react-router-dom";
import logo192 from './logo192.png';

function Navbar() {
  return (
      <div style={{display:'flex',padding:'0 150px',backgroundColor:'darkgray',height:'100px'}}>
        <Link style={{textDecoration:'none',color:'black'}} to={'/'}><h1>MovieSeriesInfo</h1></Link>
        <div style={{position:'absolute',right:'150px'}}>
          <img style={{width:'100px',height:'100px'}} alt='imdb' src='https://download.logo.wine/logo/IMDb/IMDb-Logo.wine.png'/>
          <img style={{width:'100px',height:'100px'}} alt='react' src={logo192}/>
        </div>
      </div>
  )
}
 


export default  Navbar;

