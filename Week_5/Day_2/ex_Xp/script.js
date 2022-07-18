let giffy = new XMLHttpRequest();
let apiKey = `hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`;
let maindiv = document.getElementsByTagName('div')[0];




giffy.open(`GET`,`https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&offset=2&limit=10`);
giffy.send();
console.log(giffy);

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

const displayGiffs = (dataObj) => {
    for(let i=0 ; i<dataObj.data.length;i++) {
        let div = document.createElement("div");
        div.style.backgroundImage= `url(${dataObj.data[i].images.downsized.url})`;
        div.style.height="300px";
        div.style.width="300px";
		div.style.backgroundRepeat="no-repeat";
        maindiv.append(div)
        console.log(dataObj.data[i].images.downsized.url);
    }
}
giffy.onerror = function(event) {
    console.log("error", giffy)
}
