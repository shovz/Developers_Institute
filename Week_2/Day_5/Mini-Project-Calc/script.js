let numbers1="";
let numbers2="";
let sum="";
let operator1 = "";
let dot=false;
let newDiv = document.getElementById("ans");

const number = (num) =>{
    if(num==="." && dot==false){
        if (operator1==""){
            numbers1 += num;
            newDiv.innerText = numbers1;
        }
        else if (!operator1=="")
        {
            numbers2+= num;
            newDiv.innerText = numbers2;
        }
        dot=true;
    }
    else if (num!==".")
    {
        if (operator1==""){
            numbers1 += num;
            newDiv.innerText = numbers1;
        }
        else if (!operator1=="")
        {
            numbers2+= num;
            newDiv.innerText = numbers2;
        }
    
    }
  
}

const operator = (operator) =>{
    console.log(operator);
    operator1= operator;
    newDiv.innerText = "";
    dot=false;
    
}

const equal = () =>{
    sum = eval(`${numbers1} ${operator1} ${numbers2}`);
    newDiv.innerText = sum;
    console.log(sum);
    dot=false;
}

const reset = () =>{
    numbers1="";
    numbers2="";
    operator1 = "";
    sum="";
    dot=false;
    newDiv.innerText = "";
}

const clears = () =>{

    if (numbers2=="")
    {
        numbers1="";
    }
    else {
        numbers2="";
    }
    operator1 = "";
    dot=false;
    newDiv.innerText = "";
}
