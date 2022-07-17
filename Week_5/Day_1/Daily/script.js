let btn =document.getElementById("send");
let input1 =document.getElementById("fname");
let input2 =document.getElementById("lname");
let fname;
let lname;

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let test = {
        "fname": fname,
        "lname": lname
    }
    test=JSON.stringify(test,null,2);
    console.log(test);
})

input1.addEventListener("input",(event)=>{
    fname = event.target.value;
})
input2.addEventListener("input",(event)=>{
    lname = event.target.value;
})

