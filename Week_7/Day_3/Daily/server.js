
const fs = require('fs');

const checkPos =(text)=>{
  const ans1 = text.reduce((acc,val)=>{
    if (val==='>'){
      return acc+=1;
    }
    else{
      return acc-=1;
    }
  },0)
  console.log(`you are in position : `,ans1);
}

const checkWhenZero=(text)=>{
  let pos=0;
  let counter=0;
  const ans2 = text.some((val) =>{
      if (val==='>'){
         pos+=1;
      }
      else if(val==='<'){
        pos-=1;
      }
      counter++
      return pos<0
  })
  console.log(`you are in -1 it took you ${counter} steps`);
}


const readText = () => {
  try {
    const text = fs.readFileSync(__dirname+`/Right-Left_Week7JS/RightLeft.txt`,'utf-8').split('');
    checkPos(text);
    checkWhenZero(text);
  } catch (e) {
    console.log(e);
  }
}
readText();

