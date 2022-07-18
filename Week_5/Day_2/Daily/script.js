let giffy = new XMLHttpRequest();
let apiKey = `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
let form = document.getElementsByTagName('form')[0];
let deleteAll = document.getElementsByTagName("button")[0];
let search;

form.addEventListener("submit",(event)=>{
	event.preventDefault();
	search= event.target.search.value;
	giffy.open(`GET`,`https://api.giphy.com/v1/gifs/search?q=${search}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`);
	giffy.send();
	form.elements.search.value="";
})

giffy.onload = function() {
	if (giffy.status != 200) {
	 	console.log("error status")
	 	console.log(giffy)
	} else {
		let dataObj = JSON.parse(giffy.response);
		console.log(dataObj)
		displayGiffs(dataObj)
	}
};


const btndelete = (deleteBtn) => {
	deleteBtn.addEventListener(`click`,(event)=>{
		event.preventDefault();
		form.elements.search.value="";
		event.target.parentElement.remove(event.target.parentElement.id);
	})
}


const displayGiffs = (dataObj) => {
	let div = document.createElement("div");
	let img = document.createElement("img");
	let deleteBtn = document.createElement("button");
	let deleteBtn_text = document.createTextNode("delete!!!!!!!!");


	img.src = `${dataObj.data[0].images.downsized_large.url}`;
	deleteBtn.append(deleteBtn_text);
	deleteBtn.setAttribute(`style`,`height:40px;width:150px`);
	btndelete(deleteBtn);

	div.setAttribute(`id`,`${dataObj.data[0].id}`);
	div.append(img,deleteBtn);

	document.body.append(div);
}

giffy.onerror = function(event) {
    console.log("error", giffy)
}


deleteAll.addEventListener("click",()=>{
	let deleteDiv = document.getElementsByTagName("div");
	deleteDiv = Array.from(deleteDiv);
	deleteDiv.forEach(element => {
		element.remove();
	});
	form.elements.search.value="";

})