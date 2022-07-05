let input =  document.createElement("input");
let input2 =  document.createElement("input");


input.type="text";
input2.type="text";
document.body.append(input,input2);
document.body.style.backgroundColor="gray";
input.style.display="flex";
input.style.margin="60px auto";
input.style.width="500px";
input.style.height="60px";

input2.style.display="flex";
input2.style.margin="50px auto";
input2.style.width="500px";
input2.style.height="60px";

const showletters = (event)=> {
    let letter = event.target.value;
    let checkL = /^[a-zA-Z]+$/;
    if(checkL.test(letter))
    {
        input2.value = letter;
    }

    

}


input.addEventListener("keyup",showletters);
