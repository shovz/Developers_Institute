// Exercise 1 : Find The Sum
    
// const func = (a,b) => {return a+b};
// console.log(func(5,3));

// Exercise 2 : Kg And Grams
    
// weight1(3); /// work either way
// function weight1(num) {
//     console.log(num*1000);
// }         
// weight1(3); 


// weight2(3);/// cant access func before declaration 
// let weight2 = function (num) {
//     console.log(num*1000);
// }         
// weight2(3);

// const weight3 = (a) => {return a*1000};
// console.log(weight3(3));

//  Exercise 3 : Fortune Teller

// (function (job,location,name,childrenNum) {
//     console.log(`You will be a ${job} in ${location},
//      and married to the ${name} with ${childrenNum} kids`)
//   })("teacher","alaska","dude",`9`);

  
//   Exercise 4 : Welcome


// (function (username) {
//     let li = document.createElement("li");
//     let profileDiv = document.createElement("div");
//     console.log(username)
//     let navbar = document.getElementsByClassName("navbar-nav")[0];
//     let text= document.createTextNode(`hello ${username}`);
//     profileDiv.setAttribute(`style`,`background-image : 
//     url(https://www.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b38cbd5e1e__880.jpg
//     );background-size:100% 100%; width:50px; height:50px`);
    
//     li.append(profileDiv,text);
//     li.classList.add("nav-item");
//     navbar.append(li);

//   })(prompt("eneter usermane"));

// Exercise 5 : Juice Bar


const makeJuice =(size)=>{
    let ingredients=[]

    const addIngredients =(ingredient1,ingredient2,ingredient3)=>{
        
        ingredients.push(ingredient1);
        ingredients.push(ingredient2);
        ingredients.push(ingredient3);
    }

    addIngredients(prompt(`ingredient1`),prompt(`ingredient2`),prompt(`ingredient3`));
    addIngredients(prompt(`ingredient4`),prompt(`ingredient5`),prompt(`ingredient6`));
    displayJuice();

    function displayJuice (){ 
        console.log(`The client wants a ${size} juice, containing`);
        ingredients.forEach(element => {
            console.log(element); 
        })
    }
}

makeJuice(prompt(`size`));