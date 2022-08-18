// Exercise 1 : Locatioמ
const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
// I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

// Exercise 2: Display Student Info
function displayStudentInfo(objUser){
    let {first,last}=objUser;
    return `Your full name is ${first} ${last}`
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

// Exercise 3: User & Id

const users = { user1: 18273, user2: 92833, user3: 90315 }

const x = Object.entries(users);
x.forEach(element => {
    element[1]*=2;
});
console.log(x);

// Exercise 4 : Person Class

class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const member = new Person('John');
  console.log(typeof member);//object

//   Exercise 5 : Dog Class
class Dog {
    constructor(name) {
      this.name = name;
    }
  };

    // 1
class Labrador extends Dog {
    constructor(name, size) {
      this.size = size;
    }
  };/// no, needs super()..

    // 2
class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };//yes!

    // 3
class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };// will work but name will be blank

    // 4
class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };//does not extends dod class - overwrites it


//   Exercise 6 : Challenges

// [2] === [2] //false cant compare arrays like this
// {} === {}/// false cant compare obj like this

const object1 = { number: 5 };
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number)//4 pass by refrance
console.log(object3.number)//4 pass by refrance
console.log(object4.number)//5


class Animal{
    constructor(name,type,color){
        this.name = name;
        this.type = type;
        this.color = color;
    }

}

class Mamal extends Animal {
    constructor(name,type,color){
        super(name,type,color)
        
    }

    sound(animal_sound){
        return `${animal_sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;

    }

}
let farmerCow = new Mamal("Lily","cow","brown and white");
farmerCow.sound("Moooo")
