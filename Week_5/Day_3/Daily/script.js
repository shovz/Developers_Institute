// 1st Daily Challenge

const makeAllCaps=(array)=>{
  let prom1 = new Promise((resolve,reject)=>{
      let test =  array.every(element=>typeof element ==="string");
      if(test){
        array.forEach((element,index) => {
          array[index] = element.toUpperCase();
        });
        resolve(array);
      } 
      else{reject("not all strings")}
  })
  return prom1;
}

const sortWords=(arr)=>{
  let prom2 = new Promise((resolve,reject)=>{
      if(arr.length>4){
        arr.sort();
        resolve(arr);
      } else{
        reject("less than 4 words")
      }
  })
  return prom2;
}

makeAllCaps([1, "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))


makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) 
      .catch(error => console.log(error))


// 2nd Daily Challenge

let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`
let str;
const toJs=(arr)=>{
  let temp = JSON.parse(arr);  
  let prom2 = new Promise((resolve,reject)=>{
      if(temp.length!=0){
        resolve(temp);
      } else{
        reject(new Error("empty"))
      }
  })
  return prom2;
}
const toMorse=(morseJS)=>{
  str = prompt("enter a word").split("");
  let temp = Object.keys(morseJS);
  let ans=[];
  let prom2 = new Promise((resolve,reject)=>{
      if(str.every(ele=>temp.includes(ele))){
        str.forEach(elem => {
          ans.push(morseJS[elem]);
        })
        resolve(ans);
      } else{
        reject(new Error("not in english"))
      }
  })
  return prom2;
}

const joinWords=(morseTranslation)=>{
  morseTranslation = morseTranslation.join(`\n`);
  let prom3 = new Promise((resolve,reject)=>{
    resolve(console.log(`"${str.join("")}" gives you \n${morseTranslation}`));
  })
  return prom3
}
toJs(morse)
.then(res=>toMorse(res))
.then(res=> joinWords(res))
.catch(err=>{console.log(err)})
