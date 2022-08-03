let login = document.getElementById("login");
let h1 = document.createElement("h1");
document.body.append(h1);


const loginUser=(event)=>{
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  fetch('http://localhost:3000/login',{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({username,password})
    })
  .then(res=>res.json())
  .then(data=>{
    if(data==false){
      h1.textContent = "Username is not register";
    }
    else{
        h1.textContent = `hello ${data.username} welcome back`;
    }
  })
  .catch(e=> {
      console.log(e);
    })

}

login.addEventListener("submit",loginUser);



