
// Ex 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove Banana from the array.
fruits = fruits.slice(1);

// 2. Sort the array in alphabetical order.
fruits = fruits.sort();

// 3. Add “Kiwi” to the end of the array.
fruits.push("Kiwi");

// 4. Remove “Apples” from the array. Don’t use the same method as in part 1.
fruits.shift();

// 5. Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome: ["Kiwi", "Oranges", "Blueberries"]
fruits.reverse();

console.log(fruits);

// Ex 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log (moreFruits[1][1][0]);