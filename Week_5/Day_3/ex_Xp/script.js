// Exercise 1 : Comparison

const compareToTen=(num=>{
    let x =  new Promise((resolve, reject) => {
        if(num<=10){
            resolve(num);
        }
        else{
            reject("err");
        }
    })
    console.log(x);
    return x
})

//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//   Exercise 2 : Promises

const test = new Promise((resolve,reject)=>{
    setTimeout(() => {
            resolve(console.log(`success`));   
    }, 4000)
}).catch(err=> console.log(err))

Promise.resolve(console.log(`success`));

setInterval(() => {
    
}, interval);
// Exercise 3 : Resolve & Reject

let prom1 = Promise.resolve(3);
prom1.then(val=>console.log(val),err=>console.log(err))
let prom2 = Promise.reject("boo").catch(err=>console.log(err))

console.log(prom2);
