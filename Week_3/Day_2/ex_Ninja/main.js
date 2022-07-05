let form = document.forms[0];
let biilAmount = document.getElementById("billamt");
let serviceQuality = form.lastElementChild;
let numberOfPeople = document.querySelector("#peopleamt");
let total;
let btn = document.getElementById("calculate");
let btn2 = document.createElement("button");

btn2.textContent="maps me";
document.body.append(btn2);

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

const showcoordinates= (myposition) =>{
   console.log("Your Latitude is: " + myposition.coords.latitude +
        " Your Longitude is: " + myposition.coords.longitude);
}
const mapme=()=>{
    navigator.geolocation.getCurrentPosition(showcoordinates);
}

btn2.addEventListener("click",mapme);
btn.addEventListener("click",calculateTip);

