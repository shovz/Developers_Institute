let main = document.getElementsByClassName('main')[0];

let tasks = JSON.parse(localStorage.getItem("task"))|| [];


function differenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  }

const displayDescription =(event)=>{
    if(event.target.textContent==="display description"){
        event.target.parentElement.children[1].style.display="block";
        event.target.textContent="hide description";
    }
    else if(event.target.textContent==="hide description"){
        event.target.parentElement.children[1].style.display="none";
        event.target.textContent="display description";
    }

}

const createelem =()=>{
    let div = document.createElement("div");
    let name = document.createElement("h1");
    let description = document.createElement("p");
    let timeleft = document.createElement("h2");
    let taskstatusdiv = document.createElement("div");
    let isCompleted = document.createElement("input");
    let taskstatus = document.createElement("label");
    taskstatus.textContent="task status";
    let btn = document.createElement("button");

    return {div,name,description,timeleft,isCompleted,taskstatus,btn}
}
const displayTasks =()=>{

    tasks.forEach(e => {
        let{div,name,description,timeleft,isCompleted,taskstatus,btn} = createelem();

        name.textContent = e.name;
        description.textContent = e.description;
        description.style.display="none";
        let startDate = new Date();
        let endDate = new Date(e.endDate);
        timeleft.textContent = differenceInDays(startDate,endDate) + " Days left";
        btn.textContent="display description";

        isCompleted.type= "checkbox";
        isCompleted.classList.add("checkbox_style");

        
        div.append(name,description,timeleft,taskstatus,isCompleted,btn);
        div.classList.add("taskCard")

        btn.addEventListener("click",displayDescription);

        main.append(div);
    });

}
displayTasks();