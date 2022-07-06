let mainContainer = document.createElement("div");
let colorContainer = document.createElement("div");
let savedColorContainer = document.createElement("div");
let canvasContainer = document.createElement("div");
let colorPicker =  document.createElement("input");
let clearBtn = document.createElement("button");
let clearText = document.createTextNode("Clear");
let mouseFlag=0;

clearBtn.append(clearText);
colorContainer.append(clearBtn,colorPicker,savedColorContainer);
mainContainer.append(colorContainer,canvasContainer);
document.body.append(mainContainer);


mainContainer.classList.add("mainContainer");
colorContainer.classList.add("colorContainer");
savedColorContainer.classList.add("savedColorContainer");
canvasContainer.classList.add("canvasContainer");
colorPicker.classList.add("colorPicker");
clearBtn.classList.add("clearBtn");


colorPicker.setAttribute("type","color");
colorPicker.setAttribute("value","#fff");

const mouseDw = () =>
{
    mouseFlag=1;
   
}
const mouseUp = () =>
{
    mouseFlag=0;
}
document.body.onmousedown = mouseDw;
document.body.onmouseup  = mouseUp;

const colorPicked = (event)=>{
    let color = document.createElement("div");
    color.classList.add("colorBox");
    color.style.backgroundColor=`${event.target.value}`;
    savedColorContainer.append(color);
}

const paint = ()=>{
    for (let i = 0; i< canvasContainer.childNodes.length;i++)
    {
       if(mouseFlag){
            let temp = canvasContainer.childNodes[i];
            temp.addEventListener("mouseover",paint2);
       }
       else{
        break;
       }
    }
}
const paint2 = (event)=>{
    event.target.style.backgroundColor=`${colorPicker.value}`;
}

const createCanvasDivs =()=>{
    let height= 42;
	let width= 40;
    for(let i=0;i< height*width;i++)
    {
        let canvasDiv = document.createElement("div");
        canvasDiv.classList.add("canvasDiv");
        canvasDiv.addEventListener("mousedown",paint);
        canvasContainer.append(canvasDiv);

    }
    

}

for (let i = 0; i< canvasContainer.childNodes.length;i++)
{
    console.log("asdsad");
    canvasContainer.childNodes[i].addEventListener("mousedown",paint);
    if(mouseFlag===1){
        canvasContainer.childNodes[i].addEventListener("mouseover",paint);
    }
}

createCanvasDivs();
colorPicker.addEventListener("change",colorPicked);


// canvasDiv.style.backgroundColor= `${event.target.value}`;
// canvasContainer
