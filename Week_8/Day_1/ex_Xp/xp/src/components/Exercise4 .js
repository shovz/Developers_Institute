import React from 'react';
import './Exercise4.css';
import logo from './logo.png'

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

const Exercise4   = ({props}) => {
  return (
        <div className='main'>
            <h1 className='h1'> Exercise4 </h1>
            <h1 style={style_header}> Exercise4 </h1>
            <p className='para'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis aliquam nam, neque sequi minima perferendis.
                Nihil minus eveniet ullam reiciendis
                neque, ipsa sit quisquam perferendis quaerat corrupti quod quo quia!
            </p>
            <a href='http://learn.di-learning.com/courses/'>http://learn.di-learning.com/courses/</a>
            <form>
                <input type="text" placeholder='this is a form'/> 
            </form>
            <img  src={logo} alt='test'/>

        </div>
  );
}

export default Exercise4  ;