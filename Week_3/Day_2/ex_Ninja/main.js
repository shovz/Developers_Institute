let form = document.forms[0];
let biilAmount = document.getElementById("billamt");
let serviceQuality  = form.lastElementChild;
let numberOfPeople   = document.querySelector("#peopleamt");
let total;
let btn = document.getElementById("calculate");

const calculateTip=()=>{
    if(serviceQuality.value=="0"|| biilAmount.value==0)
    {
        alert("enter bill amount and service Quality");
    }
    if(numberOfPeople.value<1 || numberOfPeople.value==="")
    {
        numberOfPeople.value=1;
    }
    total = (biilAmount.value*serviceQuality.value)/numberOfPeople.value;
    total = total.toFixed(2);
    console.log(total);
}
btn.addEventListener("click",calculateTip);

