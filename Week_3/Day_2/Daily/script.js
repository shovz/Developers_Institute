let form = document.forms[0];
let inputs=[]
let btn = form[form.length-1];
let story="";
let flag=true;

for (let i=0; i<form.length-1;i++)
{   
    inputs[i]=form[i];
}



const words = (event)=>{

   story+= event.target.value + " ";
   console.log(story);
}

for (let i=0; i<form.length-1;i++){

    inputs[i].addEventListener("change",words);
}

const libMe = (event)=>{
    event.preventDefault();
    story= story.split(" ");
    story.pop();
    for (let i=0;i<story.length;i++)
    {
        console.log("qqq",flag);
        if (story[i]==="")
        {
            flag=true;
           
        }
        else {
            flag=false;
        }
    }

    if(flag==false && story.length===5){
        console.log(`
        ${story[0]} is ${story[1]} like 
        ${story[2]} and he ${story[3]} to the
        ${story[4]} and then left 
        `);
    }
    else{
        let reset= document.getElementsByTagName("input");
        for (let i=0; i<inputs.length;i++){
            reset[i].value="";
        }
        alert("finish form");
        story="";
    
    }

}
form.addEventListener("submit",libMe);

