// Exercise 1: Timer

///part 2 + 3
// let div = document.getElementById("container");
// let btn = document.getElementById("clear");

// const hello = () => {
//     let p = document.createElement("p");
//     let text = document.createTextNode("hello world");
//     p.append(text);
//     div.append(p);
//     if (div.children.length==5)
//     {
//         clear();
//     }

// }
// let timer = setInterval (hello,2000);
// const clear =() =>{
//     clearInterval(timer)
// }

// btn.addEventListener("click",clear);

///part 1
// setTimeout(hello,2000);


// Exercise 2 : Move The Box

// let btn2 = document.querySelector("button");
// let div2 = document.getElementById("container");
// let animate = document.getElementById("animate");
// let timer2;
// let pos=1;
// const movebox = ()=>{

//     animate.style.left=`${pos}px`;
//     pos++;

//     if (pos===350)
//     {
//         clearInterval (timer2);
//         pos=0;
//     }
// }

// const myMove = ()=>{
    
//     timer2 = setInterval (movebox,1);
// }

// Exercise 3: Drag & Drop
let box = document.getElementById("box");
let target = document.getElementById("target");

box.setAttribute("draggable","true");
box.addEventListener("dragstart",()=>{

    box.style.backgroundColor="blue";
});
box.addEventListener("dragend",()=>{
    box.style.backgroundColor="red";
});
target.addEventListener("dragover",event=>{
    event.preventDefault();
    target.style.border="4px dashed green";
});

target.addEventListener("dragleave",event=>{
    event.preventDefault();
    target.style.border="none";
});
target.addEventListener("drop",event=>{
    event.preventDefault();
    target.style.border="none";
    box.style.margin="25%";
    target.append(box);

});
