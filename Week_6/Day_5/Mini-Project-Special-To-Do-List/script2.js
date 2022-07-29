let main = document.getElementsByClassName('main')[0];
let tasks = JSON.parse(localStorage.getItem("task"))|| [];


const differenceInDays = (date1, date2)=> {
    const diffInMs = Math.abs(date2 - date1);
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}
const isDatePassed = (e)=> {
    let ans;
    new Date(e.endDate) - new Date()>=0? ans=false: ans=true;
    return ans;
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
const editDescription =(event)=>{
    let newDescription = prompt("enter new Description");
    event.target.parentElement.children[1].textContent=newDescription;
}
const deleteTask =(event)=>{
    if (confirm("are you sure")) {
        event.target.parentElement.remove();
      }

}
const createElem =()=>{
    let div = document.createElement("div");
    let name = document.createElement("h1");
    let description = document.createElement("p");
    let timeleft = document.createElement("h2");
    let isCompleted = document.createElement("input");
    let taskstatus = document.createElement("label");
    let displayBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    let taskObj ={
        div:div,
        name: name,
        description:description,
        timeleft:timeleft,
        isCompleted:isCompleted,
        taskstatus: taskstatus,
        displayBtn:displayBtn,
        editBtn:editBtn,
        deleteBtn:deleteBtn
    }

    return taskObj
}
const setAtt =(e)=>{
    let taskObj  = createElem();
    taskObj.name.textContent = e.name;
    taskObj.description.textContent = e.description;
    taskObj.description.style.display="none";
    taskObj.taskstatus.textContent="task status";

    taskObj.displayBtn.textContent="display description";
    taskObj.displayBtn.style.margin="10px";
    taskObj.editBtn.textContent="edit description";
    taskObj.editBtn.style.margin="10px";
    taskObj.deleteBtn.textContent="delete task";
    taskObj.deleteBtn.style.margin="10px";

    taskObj.isCompleted.type= "checkbox";
    taskObj.isCompleted.classList.add("checkbox_style");
    taskObj.div.classList.add("taskCard");
    let startDate = new Date();
    let endDate = new Date(e.endDate);
    taskObj.timeleft.textContent = differenceInDays(startDate,endDate) + " Days left";

    if(isDatePassed(e)){
        taskObj.div.style.backgroundColor="blue";
    }

    return taskObj;

}
const taskStatus = (e)=> {
    if(e.target.checked) {
        e.target.parentElement.style.backgroundColor="green";
    }
    else{
        e.target.parentElement.style.backgroundColor="red";
    }
}
const displayTasks =()=>{
    tasks.sort((date1,date2)=>{return new Date(date1.startDate) - new Date(date2.startDate)});
    tasks.forEach(e => {
        let taskObj = setAtt(e);
        taskObj.isCompleted.addEventListener("change",taskStatus);
        taskObj.displayBtn.addEventListener("click",displayDescription);
        taskObj.editBtn.addEventListener("click",editDescription);
        taskObj.deleteBtn.addEventListener("click",deleteTask);

        taskObj.div.append(taskObj.name,taskObj.description,taskObj.timeleft,
                  taskObj.taskstatus,taskObj.isCompleted,taskObj.displayBtn,
                  taskObj.editBtn,taskObj.deleteBtn);
        main.append(taskObj.div);
    });
}
displayTasks();