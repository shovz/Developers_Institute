// ex 1

// let h1= document.querySelector("h1");
// console.log(h1);

// const fontSize=() =>{
//     h1.style.fontSize= `${Math.floor(Math.random() * 100)}px`;
// }

// h1.addEventListener("mouseover",fontSize);


// let article = document.querySelector("article");
// article.removeChild(article.lastElementChild);

// let h2 = document.querySelector("h2");

// const changeColor=() =>{
//     h2.style.backgroundColor= `red`;
// }

// h2.addEventListener("click",changeColor);

// let h3 = document.querySelector("h3");

// const hide=() =>{
//     h3.style.display = "none";
// }

// h3.addEventListener("click",hide);

// let button = document.querySelector("button");

// const bold=() =>{
//     article.style.fontWeight="bold";
    
// }

// button.addEventListener("click",bold);

// let p = document.querySelectorAll("p");

// const newspaperSpinning = [
//     { transform: 'rotate(0) scale(1)' },
//     { transform: 'rotate(360deg) scale(0)' }
//   ];
  
//   const newspaperTiming = {
//     duration: 2000,
//     iterations: 1,
//   }

// const animations =() =>{
//     p[1].animate({newspaperSpinning,newspaperTiming})
// }

// p[1].addEventListener("mouseover",animations);


// ex 2

// let form = document.forms[0];
// console.log(form);

// let input1 = form.elements.fname;
// let input2 = form.elements.lname;

// console.log(input1,input2);

// input1 = form.elements["fname"];
// input2 = form.elements["lname"];
// console.log(input1,input2);

// let names="";
// let last="";

// const changeInput= (event)=>{

//   if (event.target.id==="fname"){
//     names =event.target.value;
//   }
//   if(event.target.id==="lname") {

//     last=event.target.value;
//   }
// }


// input2.addEventListener("change", changeInput);
// input1.addEventListener("change", changeInput);

// const submitMe = (event)=>{
//     event.preventDefault();

//     if (names!=="" && last !=="" )
//     {
//       let li1 = document.createElement("li");
//       let li2 = document.createElement("li");
//       li1.innerHTML = names;
//       li2.innerHTML = last;
//       console.log(names,last);
//       console.log(document.querySelector("ul"));
//       document.querySelector("ul").append(li1,li2);
//     }

// }
// form.addEventListener("submit",submitMe);

// ex 3


// let allBoldItems=[];
// let strongs = document.querySelectorAll("strong");

// const getBold_items = () => {
//   for (let i =0; i<strongs.length;i++)
//   {
//     allBoldItems[i] = strongs[i].innerHTML;

//   }
//   console.log(allBoldItems);
// }

// const highlight = () => {
//   for (let i =0; i<strongs.length;i++)
//   {
//     strongs[i].style.color="blue";
//   }
// }

// const return_normal = () => {
//   for (let i =0; i<strongs.length;i++)
//   {
//     strongs[i].style.color="black";

//   }
// }



// ex 4

// Vol = 4/3 * πr^3

// let form2 = document.forms[0];
// let input4 = form2.elements["radius"];
// let radius;


// const radiusNumber = (event)=> {
  
//   radius = event.target.value;
//   console.log(event.target.value);
// }
// input4.addEventListener("change",radiusNumber);

// const submitMe2 = (event)=>{
//   event.preventDefault();

//   let volume = (4/3) * Math.PI * Math.pow(radius, 3);
//   console.log(volume);

// }
// form2.addEventListener("submit",submitMe2);


// ex 5

// let p2 = document.querySelector("p");

// const changePosX = ()=>{p2.style.backgroundColor="blue";}
// const changePosY = ()=>{p2.style.backgroundColor="green";}
// const changeFont = ()=>{p2.style.fontSize="4rem";}
// const changeColor = ()=>{p2.style.color="red";}

// p2.addEventListener("mouseout",changePosX);
// p2.addEventListener("mouseover",changePosY);
// p2.addEventListener("click",changeFont);
// p2.addEventListener("dblclick",changeColor);
