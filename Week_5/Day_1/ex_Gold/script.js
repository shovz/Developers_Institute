let form =document.getElementsByTagName("form")[0];
let input1 =document.getElementById("fname");
let input2 =document.getElementById("lname");
let fname;
let lname;

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let test = {
        "fname": fname,
        "lname": lname
    }
        
    localStorage.setItem('info',JSON.stringify(test,null,2));
    window.location.href="./index2.html";
})

input1.addEventListener("input",(event)=>{
    fname = event.target.value;
})
input2.addEventListener("input",(event)=>{
    lname = event.target.value;
})

