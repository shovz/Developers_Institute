//  ex 1

let x = prompt("enter 1st number");
let y = prompt("enter 2nd number");

if (x>y)
{
    console.log(x, "is the biggest number");
}
else if(x<y)
{
    console.log(y, "is the biggest number");
}
else {
    console.log("the numbers are equal");
}


//  ex 2
let newDog = prompt("enter a dog breed");
console.log(`there are ${newDog.length} letters in Chihuahua`);
console.log(newDog.toLocaleLowerCase());
console.log(newDog.toLocaleUpperCase());

if(newDog==="Chihuahua")
{
    console.log('I love Chihuahuas, it`s my favorite dog breed');
}
else{
    console.log(`I dont care, I prefer cats`);
}

//  ex 3

let num = prompt("enter a number");

if(num%2===0)
{
    console.log(num ,`is an even number`);
}
else {
    console.log(num ,`is an odd number`);
}

//  ex 4

let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

switch(users.length)
{
    case 0:
        console.log(`no one is online`);
        break;
    case 1:
        console.log(users[0], `is online`);
        break;
    case 2:
        console.log(`${users[0]} and ${users[1]} are online`);
        break;    
    default:
        console.log(`${users[0]}, ${users[1]} and ${users.length-2} users are online`);
}
    

