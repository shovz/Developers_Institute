
//  Exercise 1: Conversion
// Convert the below promise into async await:
fetch("https://www.swapi.tech/api/planets/3")
.then(response => response.json())
.then(result => console.log(result))
.catch(er=>console.log(er));


const fetchtoAwait = async()=>{
  const test = await fetch("https://www.swapi.tech/api/planets/3");
  if(test.status !== 200){
		throw new Error ("Not good - get gif");
	} else{
    return await test.json();
	}
}

async function display(){
	try {
    let x = await fetchtoAwait();
		console.log(x)
	} catch (err){
		console.log(err.message)
	}
}


// Exercise 2: Analyze
function resolveAfter2Seconds() {
  return new Promise(resolve => {
      setTimeout(() => {
          resolve('resolved');
      }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
// "calling" 
// a Promise
// "resolved" after 2 sec









