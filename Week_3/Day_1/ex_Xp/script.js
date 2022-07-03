
//ex 1
let div1 = document.getElementById("container");

console.log(div1);

document.getElementsByTagName("ul")[0].children[1].innerHTML="Richard";

let ul1 = document.getElementsByClassName("list");

ul1[0].firstElementChild.innerHTML="shoval";
ul1[1].firstElementChild.innerHTML="shoval";

document.getElementsByTagName("li")[3].remove();


ul1[0].classList.add("student_list","university", "attendance");
ul1[1].classList.add("student_list");

//ex 2

let div2= document.querySelector("div");
div2.setAttribute('style', "background-color:lightblue; padding: 30px");

﻿
document.querySelector("li").setAttribute('style', "display:none");

document.querySelector("ul").lastElementChild.setAttribute(`style`,"border: 3px solid black");

document.body.setAttribute("style","font-size:2rem");

let x = document.querySelectorAll("li")[0].innerHTML;
let y= document.querySelectorAll("li")[1].innerHTML;

if(div2.style.backgroundColor==="lightblue")
{
    alert(`hello ${x} abd ${y}`);
}

// ex 3 

let div3 = document.getElementById("navBar");
div3.setAttribute(`id`,"socialNetworkNavigation");

let li3 = document.createElement("li");
let text = document.createTextNode("Logout");
li3.appendChild(text);
li3.innerHTML = `<a href="#">${text.nodeValue}</a>`;
document.querySelector("ul").appendChild(li3);

document.querySelector("ul").firstElementChild.textContent;

document.querySelector("ul").lastElementChild.textContent;

// ex 4

// let allBooks = [
//     {
//         "title" :"book1",
//         "author":"shovz",
//         "image" : "https://img.freepik.com/free-psd/book-cover-mockup_125540-572.jpg?w=2000",
//         "alreadyRead" :  true
//     },
//     {
//         "title" :"bookzzzz",
//         "author":"moses",
//         "image" : "https://cdn.britannica.com/19/162819-050-0D2A234B/Gould-book-Marc-Coussin.jpg",
//         "alreadyRead" :  false
//     }
// ]


// let div4 = document.querySelector("div");
// let table = document.createElement("table");

// let tr1 = document.createElement("tr");
// let tr2 = document.createElement("tr");
// let tr3 = document.createElement("tr");

// let th1 = document.createElement("th");
// let th2 = document.createElement("th");
// let th3 = document.createElement("th");
// let th4 = document.createElement("th");

// let td1 = document.createElement("td");
// let td2 = document.createElement("td");
// let img1 = document.createElement("img");
// let td4 = document.createElement("td");

// let td5 = document.createElement("td");
// let td6 = document.createElement("td");
// let img2 = document.createElement("img");
// let td8 = document.createElement("td");



// tr1.append(th1,th2,th3,th4);
// tr2.append(td1,td2,img1,td4);
// tr3.append(td5,td6,img2,td8);
// table.append(tr1,tr2,tr3);

// div4.append(table);
// div4.setAttribute(`style`,"width:80vw; Height:80vh;background-color:lightgray; margin: auto; padding:30px; text-align:center");
// table.setAttribute(`style`,"width:100%; Height:100%;border-collapse: collapse;");
// tr1.setAttribute(`style`,"border:2px solid black;");
// tr2.setAttribute(`style`,"border:2px solid black;");
// tr3.setAttribute(`style`,"border:2px solid black; ");

// th1.innerHTML = Object.keys(allBooks[0])[0];
// th2.innerHTML = Object.keys(allBooks[0])[1];
// th3.innerHTML = Object.keys(allBooks[0])[2];
// th4.innerHTML = Object.keys(allBooks[0])[3];

// td1.innerHTML = allBooks[0].title;
// td2.innerHTML = "written by " + allBooks[0].author;
// img1.setAttribute(`src`, allBooks[0].image);
// img1.setAttribute(`style`,"width:100px; Height:100px");
// td4.innerHTML = allBooks[0].alreadyRead;

// td5.innerHTML = allBooks[1].title;
// td6.innerHTML = "written by " + allBooks[1].author;
// img2.setAttribute(`src`, allBooks[1].image);
// img2.setAttribute(`style`,"width:100px; Height:100px");
// td8.innerHTML = allBooks[1].alreadyRead;

// ex 4 using for
let allBooks = [
    {
        "title" :"book1",
        "author":"shovz",
        "image" : "https://img.freepik.com/free-psd/book-cover-mockup_125540-572.jpg?w=2000",
        "alreadyRead" :  true
    },
    {
        "title" :"bookzzzz",
        "author":"moses",
        "image" : "https://cdn.britannica.com/19/162819-050-0D2A234B/Gould-book-Marc-Coussin.jpg",
        "alreadyRead" :  false
    }
]


let div4 = document.querySelector("div");
let table = document.createElement("table");

let tr=[];
let th=[];
let td=[];
let img=[];
for(let i=0;i<3;i++)
{
    tr[i]= document.createElement("tr");
    for(let j=0;j<4;j++)
    {
        if(i===0)
        {
            th[j]= document.createElement("th");
            th[j].setAttribute(`style`,"border:2px solid black;");
            th[j].innerHTML = Object.keys(allBooks[0])[j];
            tr[i].appendChild(th[j]);
        }
        else{
            td[j]= document.createElement("td");  
            td[j].setAttribute(`style`,"border:2px solid black;"); 

            if(th[j].innerHTML==="image")
            {
                img[j]= document.createElement("img");  
                td[j].appendChild(img[j]); 
            } 
            tr[i].appendChild(td[j]); 
        }

    }
    table.appendChild(tr[i]);
}

div4.appendChild(table);

div4.setAttribute(`style`,"width:80vw; Height:80vh;background-color:lightgray; margin: auto; padding:30px; text-align:center");
table.setAttribute(`style`,"width:100%; Height:100%;border-collapse: collapse;");
let temp;
for (let i=0;i<allBooks.length;i++)
{
    for (let j=0;j<4;j++){
        temp = Object.values(allBooks[i])[j];
        
        if(Object.keys(allBooks[i])[j]==="image")
        {
            document.querySelectorAll("tr")[i+1].children[2].children[0]
            .setAttribute(`src`,temp);
            document.querySelectorAll("tr")[i+1].children[2].children[0]
            .setAttribute(`style`,"width:100px; Height:100px");

        }
        else{
            document.querySelectorAll("tr")[i+1].children[j].innerHTML=temp; 
            if(temp===false)
            {
                document.querySelectorAll("tr")[i+1]
                .setAttribute(`style`,"color:red");
            }
        }

    }
}
