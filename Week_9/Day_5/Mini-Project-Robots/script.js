const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

let nav = document.createElement("div");
let logo = document.createElement("div");
let search = document.createElement("input");
let logoText = document.createTextNode("RoboFriends");


search.type="text";
search.placeholder="Search Robots";
search.classList.add("search");

logo.append(logoText);
logo.classList.add("logo");

nav.append(logo,search);
nav.classList.add("nav");

let main = document.createElement("div");
main.classList.add("mainDiv");

(function createRoboGrid(){
    robots.forEach(element => {
        let roboCard = document.createElement("div");
        roboCard.classList.add("roboCard");
        roboCard.setAttribute(`id`,`${element.id}`)
    
        let roboImg = document.createElement("img");
        roboImg.src=`${element.image}`;
        roboImg.classList.add("roboImg");
    
        let roboName = document.createElement("h3");
        let roboNameText = document.createTextNode(`${element.name}`);
        roboName.append(roboNameText);
    
        let roboMail = document.createElement("h4");
        let roboMailText = document.createTextNode(`${element.email}`);
        roboMail.append(roboMailText);
    
        roboCard.append(roboImg,roboName,roboMail);
        main.append(roboCard);
    });
    
})()

document.body.append(nav,main);


const roboFilter=(event)=>{
    let filteredRobots= robots.filter(element=>{
        if(element.name.toLowerCase().includes(event.target.value.toLowerCase()) || 
             element.email.toLowerCase().includes(event.target.value.toLowerCase())){
            return element;
        }

    })
    displayRobots(filteredRobots);

}

const displayRobots=(filteredRobots=>{
    robots.forEach(element => {
        let robot = document.getElementById(`${element.id}`);
        console.log(robot);
        if(filteredRobots.length>0) {        
            for(let i in filteredRobots)
            {
                let filter = document.getElementById(`${filteredRobots[i].id}`);
                if(robot.id!=filter.id){
                    robot.setAttribute(`style`,`display:none`);
                }
                else{
                        robot.setAttribute(`style`,`display:flex`);
                        break;
                    }
                
            }}
         else {robot.setAttribute(`style`,`display:none`);}
    })
})


search.addEventListener("input",roboFilter);
