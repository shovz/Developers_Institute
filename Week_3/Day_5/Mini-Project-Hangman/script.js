let player1;
let player2;
let ans;
let prevans="";
let times=10;

const check = (letter) =>{
    for (let i=0;i<player1.length;i++)
    {

        if (letter===player1[i])
        {            
             ans[i]=letter;
        }

    }
    return ans.join("");
}


do {
    player1=prompt("eneter a word more than 8 lettes");
}while(player1.length<8)

ans = "*".repeat(player1.length);
ans = ans.split("");

do {
    if(ans.join("")===player1)
    {
        alert("you win!!!!!");
        break;
    }
    if (times==0){
        alert("you lose");
        break;
    }
    player2=prompt("eneter a letter");
    if(prevans.includes(player2)==false)
    {
        console.log(`${times} tries left`);
        prevans+=player2;
        console.log(check(player2));
        times--;
    }
    else if(player2.length!=1)
    {      
         alert(`not a valid guess`);
    }
    else if (prevans.includes(player2)==true)
    {
        alert(`${player2} already gussed ${times} tries left`);
    }
}while(player2.length!=1 || times>=0)







