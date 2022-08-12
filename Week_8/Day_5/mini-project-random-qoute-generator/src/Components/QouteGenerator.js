import React, { Component } from 'react';
import quotes from './QuotesDatabase';
import './QouteGenerator.css'
class QuoteGenerator extends Component{
  constructor(){
    super();
    this.state={
        quote: quotes[5].quote,
        author: quotes[5].author,
    }
    this.randNum  = -1;
    this.css  = ["red","blue","yellow","green"]
  }
  changeCss=()=>{

    let color1;
    let color2;

    do{
        color1 = Math.floor(Math.random()*this.css.length);
        color2 = Math.floor(Math.random()*this.css.length);
        console.log(color1,color2);
      }
      while(color1===color2)


    document.querySelector('.style').style.backgroundColor=this.css[color1]
    document.querySelector('.style').style.color=this.css[color2]
    document.querySelector('.style button').style.backgroundColor=this.css[color2]
    document.querySelector('.style button').style.color=this.css[color1]
  }
  newQuoute=()=>{
    let rand;
    do{
      rand = Math.floor(Math.random()*quotes.length);
    }
    while(rand===this.randNum)

    this.randNum = rand;
    let {quote,author} = quotes[rand];
    author = author||'--Unknown--'
    this.setState({quote,author})
    this.changeCss();
  }
  render(){
    return (
      <div className='main style'>
        <div className='qoute '>{this.state.quote}</div>
        <div className='author '>{this.state.author}</div>
        <button  onClick={this.newQuoute}>New Quote</button>
      </div>
    );
  }
}
export default QuoteGenerator;