let x = document.getElementById("x");
let o = document.getElementById("o");
let gameBox = document.getElementsByClassName("gameBox")[0];
let player;
let computer;
let borad =[];

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]



const gameStart=(event)=>{
    player = event.target;
    if(player.textContent==="x"){computer="o";}
    else{computer="x";}
    x.style.display="none";
    o.style.display="none";

    for(let i=0;i< gameBox.childElementCount;i++)
    {
        // console.log( gameBox.children[i]);
        let row = gameBox.children[i];
        for(let j=0;j< row.childElementCount;j++){
            row.children[j].addEventListener("click",mark);
        }
    }
    function mark(event){
        // console.log(event.target.childNodes.length);
        if(event.target.childNodes.length===0){
            let text = document.createTextNode(`${player.textContent}`);
            event.target.classList.add("marked")
            event.target.append(text);
            borad.push(event.target.id);
            computerMark(event.target);
        }
        
    }
    const computerMark=(target)=>{

        let possibleWin=[];
        let possibleEmpty=[];
        for (let key of winCombos) {   
            key.forEach(element => {
                if(element==target.id)
                {
                    // console.log(key); 
                    possibleWin.push(key);
                }
            });
           
        }
        // console.log(possibleWin); 
        for (let i in possibleWin) {
            for(let j=0;j<3;j++){
                let checked = document.getElementById(possibleWin[i][j]);
                console.log(checked,checked.textContent); 
                if(checked.textContent!==player.textContent && checked.textContent!==computer.textContent)
                {
                    // console.log(checked.id); 
                    
                    possibleEmpty.push(checked.id);
                    console.log(possibleEmpty); 
                }
            }
        }
        
        // console.log(possibleEmpty); 
        let rand = Math.floor(Math.random()*possibleEmpty.length);
        let text = document.createTextNode(`${computer}`);
        let cmark = document.getElementById(`${possibleEmpty[rand]}`);
        cmark.classList.add("marked")
        cmark.append(text);
    }
}

                





x.addEventListener("click",gameStart);
o.addEventListener("click",gameStart);
