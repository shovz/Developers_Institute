
// ex_1 //

let food = prompt('what is your favorite food');
let meal = prompt('what is your favorite meal');

console.log("I eat",food, "in every",meal);

// ex_2 //

// part 1//
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = `I love watching ${myWatchedSeries[0]},${myWatchedSeries[1]}, and ${myWatchedSeries[2]} `;

console.log("myWatchedSeriesLength :",myWatchedSeriesLength);
console.log("myWatchedSeriesSentence :",myWatchedSeriesSentence);
console.log(`"${myWatchedSeriesSentence}that is ${myWatchedSeriesLength} series in total`);

// part 2//
myWatchedSeries.push("friends");
console.log("adding series to the end: ",myWatchedSeries);

myWatchedSeries.unshift("new girl, ")
console.log("adding series to the beginning : ",myWatchedSeries);

myWatchedSeries.splice(1,1);
console.log("removing series at the middle : ",myWatchedSeries);

console.log("the 3rd letter of money heist : ",myWatchedSeries[myWatchedSeries.indexOf("money heist")].slice(2,3));

console.log("final result",myWatchedSeries);

// ex_3 //

let celsius = 30;
let fahrenhiet = (celsius/5)*9 +32;
console.log(`${celsius}°C is ${fahrenhiet}°F.`);

// ex_4 //

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// 1. Prediction: 55
// 1. Actual: 55

a = 2;

console.log(a+b) //second expression
// 2. Prediction: 23 , a value changed to 2
// 2. Actual: 23

// 3. What is the value of c? undefined - didnt set a value

// 4. Analyse the code below, what will be the outcome?
console.log(3 + 4 + ' 5'); // adding 2 numbers + printing string '5' without space : 75

// ex_5 //

// 1. 

typeof(15)
// Prediction: number 
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: Not a number - thought its an expression istead of typef
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean 
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers - you can do addition with strings
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: hamburger - cant do subtraction with strings
// Actual: NaN

"1" + "3"
// Prediction: 13 - adding something to a string just combined them into 1 string
// Actual: 13

"1" - "3"
// Prediction: 2 - you can subtract strings that icludes only number
// Actual: -2 - ???

"johnny" + 5
// Prediction: johnny5 
// Actual: johnny5

"johnny" - 5
// Prediction: NaN - cant subtract a number/boolean from a string 
// Actual: NaN

99 * "hello"
// Prediction:  NaN cant multiply a number/boolean and a string
// Actual: NaN

1 != 1
// Prediction: flase
// Actual: flase

1 == "1"
// Prediction: true
// Actual: true

1 === "1"
// Prediction: false 
// Actual: false



// ex_5 //

5 + "34"
// Prediction: 534
// Actual:

5 - "4"
// Prediction: NaN - thought you can subtract only when both are strings/numbers
// Actual: 1

10 % 5
// Prediction: 0 - return the remainder after division
// Actual: 0

5 % 10
// Prediction: 5 is smaller then 10 so the remainder is 5
// Actual:

"Java" + "Script"
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
// Prediction: "  "
// Actual: "  "

" " + 0
// Prediction: " 0"
// Actual:

true + true
// Prediction: true
// Actual: 2 - forgot that ture is treated as "1" and false as "0"

true + false
// Prediction: 1
// Actual: 1

false + true
// Prediction: 1
// Actual: 1

false - true
// Prediction: -1
// Actual: -1

!true
// Prediction: false
// Actual: false

3 - 4
// Prediction: -1
// Actual:

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
