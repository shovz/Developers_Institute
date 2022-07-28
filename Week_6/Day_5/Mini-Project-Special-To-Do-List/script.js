let form = document.getElementsByTagName('form')[0];
let tasks= JSON.parse(localStorage.getItem("task")) || [];


const addTask=(event)=>{
	event.preventDefault();
    // console.log(event.target.children['name'].value);
    // console.log(event.target.children['description'].value);
    // console.log(event.target.children['start'].value);
    // console.log(event.target.children['end'].value);
	let objectTask = {
			name :event.target.children['name'].value,
            description : event.target.children['description'].value,
            startDate : event.target.children['startDate'].value,
            endDate : event.target.children['endDate'].value,
            isCompleted: false
		}
        tasks.push(objectTask);
    localStorage.setItem("task", JSON.stringify(tasks));
    location.href='index2.html';
}



form.addEventListener("submit",addTask);

