let infoBox = document.getElementById("infoBox");
let btn = document.getElementsByTagName("button")[0];
let icon = document.getElementsByClassName("loading")[0];
let character_name = document.getElementById("name");
let character_height = document.getElementById("height");
let character_gender = document.getElementById("gender");
let character_bYear = document.getElementById("bYear");
let character_world = document.getElementById("world");
let rand=0;
let rand2;

const displayCharacter = (name,height,gender,birth_year,world)=>{
    let name_text = document.createTextNode(`Name :${name}`);
    let height_text = document.createTextNode(`Height :${height}`);
    let gender_text = document.createTextNode(`Gender :${gender}`);
    let birth_year_text = document.createTextNode(`Birth Year :${birth_year}`);
    let world_text = document.createTextNode(`Planet :${world}`);

    character_name.append(name_text);
    character_height.append(height_text);
    character_gender.append(gender_text);
    character_bYear.append(birth_year_text);
    character_world.append(world_text);
    icon.setAttribute(`style`,`display:none`);

}

const gettingData = async (character)=>{
    let {name:name,
        height:height,
        gender:gender,
        birth_year:bYear,
        homeworld:world} = character;
    world = (await (await fetch(world)).json()).result.properties.name;
        
    return {name,height,gender,bYear,world}

}

const starWars_fetch = async (rand)=>{
    let character_fetch = await fetch(`https://www.swapi.tech/api/people/${rand}`);
    if(character_fetch.status===200){
        let character  = await character_fetch.json();
        let characterInfo = await gettingData(character.result.properties)
        return characterInfo;   
    }
    else{
        throw new Error("wtf?");
    }

}

const resetInfo = ()=>{
    for (let i = 1; i < infoBox.children.length; i++) {
        infoBox.children[i].textContent="";
        
    }
}
const loading = async ()=>{
    resetInfo();
    do{
        rand2 = Math.floor(Math.random()*83 +1);
    }while(rand===rand2)
    rand=rand2;
    try{
        icon.setAttribute(`style`,`display:block`);
        let {name,height,gender,bYear,world} = await starWars_fetch(rand);
        console.log(name,height,gender,bYear,world);
        displayCharacter(name,height,gender,bYear,world);
    }
    catch{
        let name_text = document.createTextNode(`Oops no Character Found`);
        character_name.append(name_text);
        icon.setAttribute(`style`,`display:none`);
    }
}


btn.addEventListener("click",loading);