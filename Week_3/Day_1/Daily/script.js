let planets = [
    {
        "planet" :"Mercury",
        moons:  ["1","2","3","4","5","6","7","8"]
    },
    {
        "planet" :"Venus",
        moons:  ["1","6","7","8"]
    },
    {
        "planet" :"Neptune",
        moons:  ["4","5","6","7","8"]
    },
    
]
let pos=0;
let colors=[];
for( key in planets)
{
    let planet= document.createElement("div");

    planet.classList.add("planet");
    planet.innerHTML = planets[key].planet;
    console.log(planets[key].planet);
    for(let key2 in  planets[key].moons)
    {
        let moon = document.createElement("div");
        moon.innerHTML = planets[key].moons[key2];
        moon.classList.add("moon");
        moon.setAttribute(`style`,`left:${pos}px; margin-left:50px `);
        pos+=30;
        planet.appendChild(moon);

    }
    pos=0;

    colors[0] = Math.floor(Math.random() * 100);
    colors[1] = Math.floor(Math.random() * 100);
    colors[2] = Math.floor(Math.random() * 100);
    planet.setAttribute(`style`,`color: white; background-color: 
    rgb(${colors[0]},${colors[1]},${colors[2]})`);
    console.log(planet);
    document.querySelector("section").
    appendChild(planet);
} 
