// daily stars
// example 1
let str="";
for (let i=1;i<=5;i++){
    for(let j=0;j<i;j++)
    {
        str+= "*";

    }
    str+= "\n";
}
console.log(str); 

// example 2
let str_2="";
let a="*"
for (let i=1;i<=5;i++){
    str_2 = str_2 + a.repeat(i) + "\n";
}
console.log(str_2); 

// example 3

let arr=[" "];
for (let i=1;i<=5;i++){
    
    arr[i]= " ";
    for(let j=0;j<i;j++)
    {
        arr[i]+= '*';

    }
    console.log( arr[i]); 
}


// Dayli Gold
const numbers = [5,0,9,1,7,4,2,6,3,8];
let str1 = "";
for(let i=0; i<numbers.length;i++){
   str1+= numbers[i].toString();
}
console.log('str1: ',str1);

let str2 = numbers.join(" ");
let str3 = numbers.join("");
let str4 = numbers.join("+");
let str5 = numbers.join(" + ");

console.log("str2 : ",str2," str3 : ",str3
," str4 : ",str4," str5 : ",str5);


const numbers2 = [5,0,9,1,7,4,2,6,3,8];
let temp;
for (let i=0;i<numbers2.length-1;i++)
{
    for(let j=i+1;j<numbers2.length;j++)
    {           
        if (numbers2[i]<numbers2[j])
        {
            temp=numbers2[j]; 
            numbers2[j]=numbers2[i];
            numbers2[i]=temp; 

        }
    } 
}
console.log(numbers2);

