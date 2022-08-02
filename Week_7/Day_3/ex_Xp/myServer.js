// Exercise 1 : Reading From A File In Node.JS
// Exercise 2 : Writing Files With Node JS
const fs = require('fs');

const readText = (file) => {
  try {
    const text = fs.readFileSync(__dirname+`/public/${file}.txt`,'utf-8');
    return text;
  } catch (e) {
    console.log(e);
  }
}


const createTxt = () => {
    try{
    let temp = readText('text');
    temp += readText('data');
    console.log(temp);
      fs.writeFileSync(__dirname+'/public/data.txt', temp + ' bla bla');
    }
    catch(e){
      console.log(e);
    }
  }
createTxt();


// const deleteText = () => {
//     try{
//         console.log('deleting');
//       fs.unlinkSync(__dirname+'/public/data.txt');
//     }
//     catch(e){
//       console.log(e);
//     }
//   }
//   deleteText();