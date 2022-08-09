let btn =document.getElementById("send");
let input1 =document.getElementById("fname");
let input2 =document.getElementById("lname");
let textarea =document.getElementById("textarea");
let fname;
let lname;

btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let test = {
        "fname": fname,
        "lname": lname
    }
    console.log(document.write(JSON.stringify(test,null,2)));

})

input1.addEventListener("input",(event)=>{
    fname = event.target.value;
})
input2.addEventListener("input",(event)=>{
    lname = event.target.value;
})

