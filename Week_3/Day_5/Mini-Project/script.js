const playTheGame = () => {
    if (confirm("Press ok to play"))
    {
        let computerNumber = Math.floor(Math.random()*10);
        num = askNumber();
        compareNumbers(num,computerNumber);
    }
    else{
        alert("No problem, Goodbye");
    }

}
const askNumber = () => {
    do 
    {
        num = prompt("enter a number between 0 and 10");

    }  while(isValidNum(num)===false);
    return num;
}

const isValidNum = (num) => {
    let reg = /^\d+$/;
    if(!reg.test(num))
    {          
        alert("Sorry Not a number type");
        return false;
    }
    if (num<0 || num>10)
    {
        alert("Sorry it's not a good number");
        return false;
    }
    else {
        return true;
    }
}

const compareNumbers = (userNumber,computerNumber) => {
    for(let times=0;times<3;times++){
        console.log(`computerNumber : `,computerNumber);
        console.log(`userNumber : `,userNumber);
        if (userNumber==computerNumber)
        {
            return alert("Winner!!!!!");
        }
        else if (userNumber>computerNumber && times<2)
        {
            alert("Sorry Not Your number is bigger then the computer's, guess again");
            userNumber = askNumber();

        }
        else if(userNumber<computerNumber && times<2) {
            alert("Your number is smaller then the computer's, guess again");
            userNumber = askNumber();
        }
    }

     return alert("out of chances!!!!!");
}

playTheGame();