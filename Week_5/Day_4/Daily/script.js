// 1st Challenge


// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });


// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
//   });
// expected output: Array [3, 42, "foo"]

// 2nd Challenge
let latitude1 = document.getElementsByName("latitude1")[0];
let longitude1 = document.getElementsByName("longitude1")[0];
let latitude2 = document.getElementsByName("latitude2")[0];
let longitude2 = document.getElementsByName("longitude2")[0];

let coordinates =[];

const sunset = (event)=>{
    switch(event.target.name){
        case "latitude1":
            coordinates[0]=event.target.value;
        break;
        case "longitude1":
            coordinates[1]=event.target.value;
        break;
        case "latitude2":
            coordinates[2]=event.target.value;
        break;
        case "longitude2":
            coordinates[3]=event.target.value;
        break;            
    }
}



const sunsetFetch = async ()=>{
    let city1 =  fetch(`https://api.sunrise-sunset.org/json?lat=${coordinates[0]}&lng=${coordinates[1]}`);

    let city2 =  fetch(`https://api.sunrise-sunset.org/json?lat=${coordinates[2]}&lng=${coordinates[3]}`);

    Promise.all([city1,city2]).then(values=>{
        return Promise.all(values.map(elem=> elem.json()));
    }).then(([val1,val2])=>{
       console.log(val1.results.sunset);
       console.log(val2.results.sunset);
    })
}

latitude1.addEventListener("input",sunset);
longitude1.addEventListener("input",sunset);
latitude2.addEventListener("input",sunset);
longitude2.addEventListener("input",sunset);
