import {useState,useEffect} from 'react';
import './App.css';

const App = () => {
  const boxArr = [0,1,2,3,4,5,6,7,8];
  const win_cond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]];
    
  const [player1_cond,setPlayer1_cond] = useState([]);
  const [player2_cond,setPlayer2_cond] = useState([]);
  const [active_player,setActive_player] = useState('x');
  const [winner,setWinner] = useState(['',false])
  const [gameSwitch,setgameSwitch] = useState(1);
  useEffect(()=>{
    if(!gameSwitch && winner[1]===false){
      handleAiClick();
      checkWin();

    }
    if(gameSwitch && winner[1]===false)
    {
      checkWin();
    }
    if (winner[1]===true)
    {
      console.log(winner);
    }
  })

  const handleAiClick=()=>{
    console.log(player1_cond.length);
    if(active_player==='o'&& player1_cond.length!==5){
      let rand;
      let box;
      do {
          rand = Math.floor(Math.random()*8);
          box = document.getElementById(`${rand}`)
      } while (box.textContent!=='');
      box.textContent = 'o';
      setPlayer2_cond([...player2_cond, box.id])
      setActive_player('x')
    }

  }
  const handleclick=(e)=>{
    if(winner[1]===false)
    {
      if(active_player==='x' && !e.target.textContent) {
        setPlayer1_cond([...player1_cond, e.target.id])
        e.target.textContent='x';
        setActive_player('o')
      }
      else if(active_player==='o' && !e.target.textContent){
          setPlayer2_cond([...player2_cond, e.target.id])
          e.target.textContent='o'
          setActive_player('x')
      }
    }

  } 

  const checkWin=()=>{
    let player1_win,player2_win;
    if(player1_win !== true || player2_win !==true){
      win_cond.forEach(item=>{
        player1_win = item.every(check_box=>{
          return player1_cond.includes(check_box.toString())
        })
        player2_win = item.every(check_box=>{
          return player2_cond.includes(check_box.toString())
        })
        
        if(player1_win===true)
        {
          return setWinner(["player 1 winssss",true])
        }
        else if(player2_win===true)
        {
          return setWinner(["player 2 winsssss",true])
        }
        if(player1_cond.length + player2_cond.length===9 && !player1_win){
          return setWinner(["its a draw",true])
        }
      })
    }

  } 

  const resetGame=()=>{
    setActive_player('x');
    setWinner(['',false])
    setPlayer1_cond([]);
    setPlayer2_cond([]);
    document.querySelectorAll('.game_box').forEach(box=>box.textContent= "")
  }
  return (
      <div 
      style={{display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      margin:'0 auto'}} >
        <div>
          <h1>REACT TIC TAC TOE</h1>
            <div>
              <button 
              onClick={()=> {
                setgameSwitch(0);
                resetGame();
                }} >Versus AI</button>
              <button onClick={()=> {
                setgameSwitch(1);
                resetGame();
                }} style={{margin:'0 15px'}}>2 Players</button>
              <button onClick={()=> resetGame()}>Reset board</button>
            </div>
        </div>
        <div className='game_container'>
            {
              boxArr.map(box=>{
                return(
                  <div onClick={(e)=>{handleclick(e)}}
                  className='game_box' key={box} id={box}>
                    
                  </div>
                )
              })
            }
        </div>
        <h1>{winner[0]}</h1>
      </div>
  );
}

export default App;
