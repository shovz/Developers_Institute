let body = document.querySelector("body");
let mainContainer = document.createElement("div");
let colorContainer = document.createElement("div");
let savedColorContainer = document.createElement("div");
let canvasContainer = document.createElement("div");
let colorPicker =  document.createElement("input");
let clearBtn = document.createElement("button");
let clearText = document.createTextNode("Clear");
let mouseFlag=0;

// appending elements
clearBtn.append(clearText);
colorContainer.append(clearBtn,colorPicker,savedColorContainer);
mainContainer.append(colorContainer,canvasContainer);
document.body.append(mainContainer);

// assgining clases
mainContainer.classList.add("mainContainer");
colorContainer.classList.add("colorContainer");
savedColorContainer.classList.add("savedColorContainer");
canvasContainer.classList.add("canvasContainer");
colorPicker.classList.add("colorPicker");
clearBtn.classList.add("clearBtn");

// assgining attribute
colorPicker.setAttribute("type","color");
colorPicker.setAttribute("value","#fff");

// checking if mouse is still clicking
const mouseDw = () =>{mouseFlag=true;}
const mouseUp = () =>{mouseFlag=false;}
body.addEventListener("mousedown",mouseDw);
body.addEventListener("mouseup", mouseUp);


// get color picker value
const colorPick = (event)=>{
    let color = document.createElement("div");
    color.classList.add("colorBox");
    color.style.backgroundColor=`${event.target.value}`;

    color.addEventListener("click",()=>{
        let test = color.style.backgroundColor.split(/\D/);
        let colorRgb_to_Hex=[];
        let counter=0;
        for (let i of test){
            if(i!=="")
            {
                colorRgb_to_Hex[counter]=i;
                counter++;
            } 
        }
        colorPicker.value = ConvertRGBtoHex(colorRgb_to_Hex[0],
            colorRgb_to_Hex[1],colorRgb_to_Hex[2]);
    })

    savedColorContainer.append(color);
}
// painting once after mouse is pressed
const paintDown= (event)=>{
    
    event.target.style.backgroundColor=`${colorPicker.value}`;

}
// keep painting until mouse is up
const paintOver = (event)=>{
    
    if(mouseFlag){
        event.target.style.backgroundColor=`${colorPicker.value}`;
    }

}
// checking which box was clicked
const clicked = ()=>
{
    for(let i=0;i<canvasContainer.childNodes.length;i++ ){
        canvasContainer.childNodes[i].addEventListener("mousedown",paintDown);
    
        canvasContainer.childNodes[i].addEventListener("mouseover",paintOver);
    }
}
//creating Canvas Layout
const createCanvasDivs =()=>{
    let height= 42;
	let width= 48;
    for(let i=0;i< height*width;i++)
    {
        let canvasDiv = document.createElement("div");
        canvasDiv.classList.add("canvasDiv");
        canvasDiv.addEventListener("click",clicked);
        canvasContainer.append(canvasDiv);

    }
    

}


const clearAll = ()=>{
    let numOfColorSaved =savedColorContainer.childNodes.length;
    for (let i of canvasContainer.childNodes){
        i.style.backgroundColor="white";
    }
    for (let i=0;i< numOfColorSaved;i++){
        savedColorContainer.childNodes[0].remove();
        console.log(i);
    }
}

// RGB to hex calc section
const cases=(exp)=>{
    console.log(exp);
    switch(exp)
    {
        case 0 :
           return "0"
        case 1 :
           return "1"
        case 2 :
           return "2"
        case 3 :
           return "3"
        case 4 :
           return "4"
        case 5 :
           return "5"
        case 6 :
           return "6"
        case 7 :
           return "7"
        case 8 :
           return "8"
        case 9 :
           return "9"
        case 10 :
           return "A"
        case 11 :
           return "B"
        case 12 :
           return "C"
        case 13 :
           return "D"
        case 14 :
           return "E"
        case 15 :
           return "F"   
    }
}
const ColorToHex = (color) =>{
    let hexadecimal = cases(Math.floor(color/16)) + cases((color/16 %1) *16);
    return hexadecimal;
  } 
const ConvertRGBtoHex=(red, green, blue)=> {
    return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }

createCanvasDivs();
colorPicker.addEventListener("change",colorPick);
clearBtn.addEventListener("click",clearAll);
