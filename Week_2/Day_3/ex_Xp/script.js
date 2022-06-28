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
    console.log(`my ${i%10}${suffixes[i-1]} choice is ${colors[i-1]}`);
}
