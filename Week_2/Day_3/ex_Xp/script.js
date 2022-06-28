// ex 1

// part 1
let people = ["Greg", "Mary", "Devon", "James"];
let people2;

people.shift();
people.splice(2,1,"Jason");
people.push("Shoval")
console.log(people);
console.log(people.indexOf("Mary"));
people2 = people.slice(1,3);
console.log(people2);
people.indexOf("foo");
// indexof("") returns -1 when the argument 
// inside the brackets does not exists in the array

let people3 = ["Greg", "James", "Mary", "Devon", ];
let last = people3[people3.length-1];
console.log(last);

console.log("people.length",people3.length-1,
"people.indexOf" ,people3.indexOf("James"));

// part 2

for (let person of people3)
{
 console.log(person);
}


let people4 = ["Greg", "James", "Mary", "Devon", ];
let i =0;
let j=0;
while (people4[i]!=="James")
{
    console.log(people4[i])
    i++;
}

while (j<people4.length)
{
    console.log(people4[j])
    if(people4[j]==="James")
    {
        break;
    }
    j++;
}

//ex 2
let colors =["red","blue","green","yellow","pink"];
let suffixes =["st","nd","rd","th"]
for(i=1;i<=colors.length;i++)
{
    if (i%10===1 && i!==11)
    {
        console.log(`my ${i}${suffixes[0]} choice is ${colors[i-1]}`);
    }
    else if (i%10===2 && i!==12)
    {
        console.log(`my ${i}${suffixes[1]} choice is ${colors[i-1]}`);
    }else if (i%10===3 && i!==13)
    {
        console.log(`my ${i}${suffixes[2]} choice is ${colors[i-1]}`);
    }
    else {
        console.log(`my ${i}${suffixes[3]} choice is ${colors[i-1]}`);
    }
    
}

//ex 3
let num = Number(prompt("please enter a number"));
console.log(num);

while (num<10)
{
    console.log(num, 'is smaller than 10');
    num = Number(prompt("please enter a new number"));
}

//ex 4

let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
//  1
console.log("numberOfFloors", building["numberOfFloors"]);

//  2
let sum= building["numberOfAptByFloor"].firstFloor + building["numberOfAptByFloor"].thirdFloor;

console.log(`1st floor has : ${building["numberOfAptByFloor"].firstFloor} apt 
3rd floor has : ${building["numberOfAptByFloor"].thirdFloor} apt
in total there are ${sum} apartments in floors 1 & 3 `);

//3
console.log(`2nd tenant is : ${building["nameOfTenants"][1]} he has ${building["numberOfRoomsAndRent"].dan[0] } rooms `);

//4
let sumrent= building["numberOfRoomsAndRent"].sarah[1] +  building["numberOfRoomsAndRent"].david[1];
if(sumrent>building["numberOfRoomsAndRent"].dan[1])
{
    building["numberOfRoomsAndRent"].dan[1] =1200;
    console.log(`dan's new rent is  ${building["numberOfRoomsAndRent"].dan[1]} `);
}

//ex 5

let family = {
    FamilyMembersnames : ["Sarah", "Dan", "David"],
    
    family_age_and_favcolor:  {
        sarah: [15, " blue"],
        dan :  [3, " red"],
        david : [87, " dark black"],
    },
    
}

for (let key in family)
{
    console.log(key);
}

for (let key in family[`FamilyMembersnames`])
{
    console.log(family[`FamilyMembersnames`][key]);
}

for (let key in family[`family_age_and_favcolor`])
{
     console.log(`${key} age and fav color : ${family[`family_age_and_favcolor`][key]}`);
}

//ex 6

let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let str= "";

for (let key in details)
{
    str+=`${key} ${details[key]} `;
     
}
console.log(str);

//ex 7 
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let society= "";

for( let key in names)
{
    society +=names[key][0] ;
}
console.log(society);
