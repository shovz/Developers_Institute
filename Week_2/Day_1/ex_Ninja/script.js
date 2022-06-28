//ex 1

5 >= 1 //true
0 === 1 //false
4 <= 1 //false
1 != 1 //false
"A" > "B" //false
"B" < "C" //true
"a" > "A" //true
"b" < "A" //false
true === false //false
true != true //false

//ex 2 // ???????????
let str = prompt("enter several numbers separated by ,")
let str2 = split('')
console.log(strArrr);

//ex 3

let str3 = prompt("enter a sentence containing the word 'Nemo'").split(" ");
let index =  str3.indexOf("Nemo");

if (index>-1)
{
    console.log(`I found Nemo at: ${index}`);
}
else {
    console.log(`I can’t find Nemo`);
}

//ex 4
let num = prompt("enter a number");
let str4;
let o = 'o';
if(num<2)
{
    str4 = "boom"
}
if (num>=2)
{
    str4 = "b" + o.repeat(num) + "m";
}
if (num %2 ==0)
{
    str4 = str4 + "!";
}
if (num %5 ==0)
{
    str4 = str4.toUpperCase();
}
console.log(str4);
