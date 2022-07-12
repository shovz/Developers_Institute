// Exercise 1 : Analyzing

// ------1------
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ['bread', ...vegetables, 'chicken', ...fruits];
console.log(result);

// result = ['bread',"carrot", "potato", 'chicken',"apple", "orange"];

// ------2------
const country = "USA";
console.log([...country]);

//  country = ["U","S","A"] string is an array of char


// Exercise 2 : Employees

let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

let welcomeStudents = users.map((element)=>{ return `hello ${element['firstName']}`} )
let FullStackResidents = users.filter(element=>{return element['role']=== `Full Stack Resident`});
let lastName = FullStackResidents.map(element=>{ return element['lastName']});

console.log(welcomeStudents);
console.log(FullStackResidents);
console.log(lastName);


// Exercise 3 : Star Wars

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let str = epic.reduce((str1,str2)=>{

    str1+=str2+ " ";
    return str1
},"")

console.log(str);

// Exercise 4 : Employees #2

let students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];


let isPassed = students.filter(elem=>{ return elem['isPassed']});
isPassed.forEach(element => {
    console.log(`Good job ${element['name']}, you passed the course in ${element['course']}`);
});
