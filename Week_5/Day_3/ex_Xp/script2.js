// # PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then
// append the gif to the page. Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// https://api.giphy.com/v1/gifs/random?tag=%22sun%22&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// # Part II
// Instead of having a fixed category of gif.
// First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// You will then fetch 1 random gif, depending on the word. The word will be the gif category
// Display the word and the gif on the page
// For example:
// you will fetch the random-word-api. This api will return a random word - for example : "happy"
// Using this word as a category, you will fetch one random gif with the category of "happy"
// and display it on the page
// # Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"


let ul = document.getElementsByTagName('ul')[0];


const randWord =()=>{
    let search =fetch(`http://random-word-api.herokuapp.com/word?number=1`)
    .then(res=> {
        if(res.status == 200) {
            return res.json()
        }else {
    		throw new Error("not 200")
    	}})
    .then(res => giffy(res[0]))
    .catch(err=>console.log(err));
}

const giffy =(word)=>{
    console.log(word);
    fetch(`https://api.giphy.com/v1/gifs/random?tag=${word}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`)
    .then(res=> {
        if(res.status == 200) {
            return res.json()
        }else {
    		throw new Error("not 200")
    	}})
    .then(res =>{
        let img = document.createElement("img");
        img.src = `${res.data.images.original.url}`;
        ul.append(img)
    })
    .catch(err=>console.log(err));
}

randWord();