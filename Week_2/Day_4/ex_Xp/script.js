//ex  1 

function infoAboutMe() {
    console.log(" My name is shoval im 31 and i love swimming");
}

infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`your name is ${personName} you are ${personAge} and your fav color is ${personFavoriteColor} `);

}

infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

//ex 2

function calculateTip() {
    let sum = Number(prompt("enter the bill tab"));
    let finalamount=0;
    if(sum<50){
        finalamount = 0.2*sum + sum;
        console.log(`the tip is 20% for the total amount of ${finalamount}`)
    }
    else if (sum>=50 && sum<200){
        finalamount = 0.15*sum + sum;
        console.log(`the tip is 20% for the total amount of ${finalamount}`)
    }
    else if (sum>=200){
        finalamount = 0.1*sum + sum;
        console.log(`the tip is 20% for the total amount of ${finalamount}`)
    }
}
calculateTip();


//ex 3
const fun = (divider) => {
    let sum = 0;
    for(let i=0;i<500;i++)
    {
        if ((i % divider)=== 0)
        {
            console.log(i);
            sum+=i;
        }
    }
    console.log(sum);
}

fun();


//ex 4

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana","orange","apple"];

const myBill = () => {
    let bill=0;
    for (i=0;i<shoppingList.length;i++)
    {

        if(shoppingList[i] in stock && stock[`${shoppingList[i] }`] != 0)
        {
            bill+= prices[`${shoppingList[i]}`];
            stock[`${shoppingList[i] }`]--;
           
        }
    }
    console.log( bill);
}
myBill();




//ex 5

const changeEnough =  (itemPrice, amountOfChange) => {
    let sum = amountOfChange[0]*0.25 + amountOfChange[1]*0.1 +
              amountOfChange[2]*0.05 + amountOfChange[3]*0.01 ;
    if(sum >= itemPrice)
    {
        return true;
    }

    return false;
}

changeEnough();


//ex 6 

const hotelCost =  (numOfNights) => {

    while (isNaN(numOfNights) || numOfNights<0)
    {
        numOfNights = prompt("plese enter a valid number of nights in the hotel");
    }
    return numOfNights*140;
}



const planeRideCost =  (destination) => {
    l
    while (typeof(Number(destination)) !== "string" )
    {
        destination = prompt("plese enter a valid destination");
    }

    switch (destination){
        case "london" :
            return 183;
        case "paris" :
            return 220;
        default:
            return 300;
    }
}

;

const rentalCarCost =  (numOfDays) => {
    while (isNaN(numOfDays) || numOfDays<0)
    {
        numOfDays = prompt("plese enter a valid number of days");
    }
    if(numOfDays<=10)
    {
        return numOfDays*40;
    }
        return (numOfDays*40 - numOfDays*40*0.05);

}



const totalVacationCost =  () => {
    let travel = prompt("please enter your travel info in the format : days in the hotel," +
                        " travel destination, number of days you will rent a car ").split(/[, ]+/);
    let sumOfTravel=0;

    while(travel.length!==3)
    {
        travel = prompt("please enter your travel info in the format : days in the hotel," +
                        " travel destination, number of days you will rent a car ").split(/[, ]+/);
    }
    // console.log(Number(travel[1]));
    // let numOfDays = prompt("enter number of days you will rent the car");

    // let destination = prompt("enter number of enter your destination").toLocaleLowerCase();

    // let numOfNights = prompt("enter number of nights");

    sumOfTravel+= hotelCost(travel[0]) + planeRideCost(travel[1]) + rentalCarCost(travel[2]);

    console.log(sumOfTravel,hotelCost(travel[0]),planeRideCost(travel[1]),rentalCarCost(travel[2]));
}
totalVacationCost();
