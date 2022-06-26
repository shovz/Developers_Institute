
// ex 1
let sentence = ["my","favorite","color","is","blue"];

console.log(sentence.join(' '));

// ex 2

let str1 = "mixed";
let str2 = "podd";
let str3 = str1 + " " + str2;
str1 = str1[1] + str1[0] + str1.slice(2);
str2 = str2[1] + str2[0] + str2.slice(2);

console.log(str3 , str1 + " " +str2);

// ex 3
let num1 = Number(prompt("enter 1st number"));
let num2 = Number(prompt("enter 2nd number"));

alert(num1 + num2);
alert(num1 * num2);
alert(num1 / num2);
