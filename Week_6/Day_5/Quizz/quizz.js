// 1. How to access the second element of the array `let arr = [3, 7, 10]`
let arr = [3, 7, 10];
console.log(arr[1]);

// 2. For the code below, what does `arrNums.splice(2, 0)` return?

    let arrNums = [1, 2, 3, 4, 5];
    arrNums.splice(2, 0) // cuts off '0' elements from the array starting from index '2'

// 3. What is the result of the following code :

    const oneTwoThree = [1, 2, 3]
    const sevenEightNine = [7, 8, 9]
    
    const all = [4, 5, 6, ...oneTwoThree, ...sevenEightNine];
    console.log(all) // i thought its pushhing the array isinde the array [4,5,6, [1,2,3],[7,8,9]]
    //resualt : [4,5,6,1,2,3,7,8,9]
    
// 4. What does the following code print to the console?

   let golf = {
     type: "sport",
     clubs: {
       high_end: "taylor made",
       low_end: "rusty basement clubs"
     }
   }  
   golf.clubs.high_end = "callaway";
   console.log(golf.clubs.high_end); //callaway

   
// 5. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.


    const x = function(a, b){
       return a*b;
    };
    x(1,2);
    // we are asgining an anonymous function to a variable named x to invoke it we need to to x (param1,param2);


// 6. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain


    function x() {
    	a = 5;
        console.log(a);
    }
    // no it will be undefind - no type of Variable
    // *** it will be only in th function scope

// #### Functions
// 7. In JavaScript can we pass functions as arguments to other functions? What does this code return ?


    function sayHello() {
       return "Hello, ";
    }
    function greeting(helloMessage, name) {
      console.log(helloMessage() + name);
    }
    greeting(sayHello, "JavaScript!");

    // Hello, JavaScript

// 8. Transform this function into an arrow function


      function sum(num1, num2){
          return num1 + num2
      }

     const sum=(num1, num2)=>{
        return num1 + num2
    }
      
      sum(40,2)
      sum(42,0)
      console.log("the answer to everything is", sum(42,0))




// 9. What does the following code print to the console? Explain the process and concept behind it


     function foo () {
       function bar() {
         return "Poppin' bottles";
       }
       return bar();
     }
     console.log(foo()); 
     // its nested functions, bar func returns' Poppin' bottles' to foo func that then returns ' Poppin' bottles'
     //to the console.log

// #### DOM
// 10. Which of the following events will you add in the `addEventListener()`method? 
    //   ☐ click - adding Event Listener from the dom
    //   ☐ onclick - adding Event Listener from the html

// 11. Does the `addEventListener()` method allow you to add many events to the same element?

    x.addEventListener("mouseover", func1);
    x.addEventListener("click", func2);
    x.addEventListener("mouseout", func3);
     // yes as much as i want

// 12. DOM exercise
// 1.  Part I : Create a button in your HTML page,when the user
//     will click the the button a paragraph will be added on the
//     DOM with the content "New Paragraph". Use arrow functions

     let btn = document.createElement("button");
     btn.textContent = "adding p";
     document.body.append(btn);

     const addP = ()=>{
        let p = document.createElement("p");
        p.textContent = "New Paragraph"; 
        // not sure if whats the difference between adding text via textContent and text node
        document.body.append(p);
        
     }

     btn.addEventListener("click",addP);

// 2. Part II : Add to each new paragraph a event listener of mouse over.
//  When you hoover on a paragraph, it should become red

const addred = (event)=>{
    event.target.style.color = "red";
 }

const addP2 = ()=>{
   let p = document.createElement("p");
   p.textContent = "New Paragraph"; 
   p.addEventListener("mouseover",addred);
   document.body.append(p);
}

// #### Array Methods
// 14. What is the value of `passed` in the following code?
     let marks = [67, 60, 89, 90, 67, 42];
     
     let passed = marks.every(function(m) {
        return m >= 50;
     });
     // passed = [67,60,89,90,67]
    //  *** i forgot every returns false or ture... passed=false

// 15. What does the following code log?

   let nums = [10, 50, 88];
   let bignums = nums.filter(function(n) {
      return n > 10;
   });
   
   console.log(bignums); // will print [50,88]


// 16. Use a javascript array method to square the value of every element in the array. 

   const input = [ 1, 2, 3, 4, 5 ];
   input.forEach((element,i) => {
    input[i] = element*element;
   });
   console.log(input) // [ 1, 4, 9, 16, 25]

// 16. Use 2 javascript array methods and chain them to return the sum of all the positives ones. 

     const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
     const total = (secondInput.filter(elem=>elem>=0 )).reduce((acc,elem)=>{return acc+=elem },0)
     console.log(total) //42


// 17. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

    let initials = "";
    const a = ('George Raymond Richard Martin'.split(' ')).forEach(elem=>initials+= elem.charAt(0));
     console.log(initials)//'GRRM'

// #### Object and Classes
// 18. How the objects are passed in JavaScript? By Value or By Reference ? Explain with an example
        let obj ={
            name: "shoval",
            age: 31
        };
        let newojb = obj;
        newojb.age=40;
        console.log(obj.age, newojb.age);// outout 40,40
        // objects are passed by Reference  

// 19. What will be printed in the console

    function Item(name, price) {
       this.name = name;
       this.price = price;
       this.displayInfo = function() {
       console.log(this.name + " is for $ " + this.price)
       }
    } 
    const cake = new Item("Chocolate Cake", 10);
    cake.displayInfo();
    // Chocolate Cake is for $10

// 20. Refactor this code using Classes

     class Item {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
        displayInfo(){
            console.log(this.name + " is for $ " + this.price)
        }
    }
    const cake2 = new Item("Chocolate Cake", 10);
    cake2.displayInfo();
// didnt remember how to create class func had to look online


// #### Promises
// 21. What will be the output and why ? What will be the state of the promise ?
    Promise.resolve('Success!')
      .then(data => {
        return data.toUpperCase()
      })
      .then(data => {
        console.log(data)
      })
    //   output: SUCCEUSS! the state will be fulfilled



// 22. What log will be made by the following code, after 2 seconds?

    const p = new Promise(function(resolve, reject) {
       setTimeout(function() {
          resolve("OK");
       }, 2000);
    });
    
    p.then().then(function(data) {
       console.log(data);
    });
    //will log the promise itself and then after 2 sec will log "OK"

// 23. Consider the following async function and its output.
// What will be displayed to the console when calling the `f()` function? Explain the process

    async function f() {
      let result = 'first!';
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done!'), 1000);
      });
    
      result = await promise;
    
      console.log(result);
    }

    f(); 
    //outpur : done! - when we assign promise to result we use awiat
    //  which mean we are wating to the proimise to be resolve - after 1 sec it will return "done!"

// 24. Use async await, and fetch a fact on cats and display it `https://catfact.ninja/fact`
//     1. Create 2 functions : on to fetch data from API, the other one to display it on the page using the DOM

    async function fact() {
        let a = await fetch(`https://catfact.ninja/fact`).then(res=>res.json());
        return a;
    }
    function display(data) {
        let p = document.createElement("p");
        p.textContent = `${data.fact}`; 
        document.body.append(p);
    }
    display(await fact());


    // 2. Make sure to use try and catch
    
    async function fact() {
        try{
            let a = await fetch(`https://catfact.ninja/fact`).then(res=>res.json());
            return a;
        }
        catch(err){
            console.log(err);
        }
    }
    function display(data) {
        let p = document.createElement("p");
        p.textContent = `${data.fact}`; 
        document.body.append(p);
    }
    display(await fact());