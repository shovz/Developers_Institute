import React, { Component } from 'react';
import UserFavoriteColors from './components/UserFavoriteColors';
import Exercise4 from './components/Exercise4 ';
import './App.css';

const sum  = 5

const user = {
  first_name: 'Bob',
  last_name: 'Dylan',
  fav_animals : ['Horse','Turtle','Elephant','Monkey']
};



class App extends Component{
  
  render(){
    return (
      <div>
         <h1>I Love JSX!</h1>

         <h1>React is {sum + sum} times better with JSX</h1>

         <h3>{user.first_name}</h3>
         <UserFavoriteColors props={user.fav_animals }/>

         <Exercise4/>
      </div>

          

    );
  }
}

export default App;
