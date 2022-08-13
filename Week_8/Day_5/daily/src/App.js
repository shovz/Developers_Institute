import React, { Component } from 'react';
import "./App.css"
import data from './superheroes.json'

class App extends Component{
  constructor() {
    super();
    this.state = {
      superheroes: data.superheroes,
      score: 0,
      top_score:0,      
    }
  }

  shuffleArray=()=>{
    let new_Array=this.state.superheroes;
    let currentIndex = this.state.superheroes.length;
    let randomIndex;

    while (currentIndex !== 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [new_Array[currentIndex], new_Array[randomIndex]] = [
        new_Array[randomIndex], new_Array[currentIndex]];
    }
    return new_Array;
  }

  resetGame=()=>{
    this.state.superheroes.forEach(elem=>{
      elem.clicked=false;
    })
  }

  cardClicked=(e)=>{
      
    let random_array = this.shuffleArray();
    this.state.superheroes.forEach(elem => {
        if(elem.id=== Number(e.target.id) && elem.clicked===false){
          elem.clicked=true;
          this.setState({superheroes:random_array,score:this.state.score+1})
        }
        else if(elem.id=== Number(e.target.id) && elem.clicked===true){
          this.setState({superheroes:random_array,score:0})
          this.resetGame();
        }
        if(this.state.score>=this.state.top_score){
          this.setState({top_score:this.state.score})
        }
      })

      // console.log(this.state.superheroes);
        


  }

 
  render(){

    return (
      <div>
        <header>
          <h1>Superheroes Memory Game</h1>
          <div className='scores'>
            <h2>score : {this.state.score}</h2>
            <h2>top score : {this.state.top_score}</h2>
          </div>
        </header>
        <div className='superheros_grid'>
           { 
          //  console.log(this.state.superheroes)
            this.state.superheroes.map(item => {
              // console.log(item.name);
              return(
                <div className='superhero_card' id={item.id} key={item.id} onClick={this.cardClicked}>
                  <img alt={item.name} src={item.image}/>
                  <h4>Name:  {item.name}</h4>
                  <h4>Occupation:  {item.occupation}</h4>
                </div>
              )
            })
           }
        </div>
      </div>



    );
  }
}
export default App;

