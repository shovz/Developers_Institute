let form = document.getElementsByTagName("form")[0];
let ul = document.getElementById("mylist");

const addItem=(event)=>{
    event.preventDefault();
    let item = (document.getElementById("item")).value;
    let amount = (document.getElementById("amount")).value;
    fetch('http://localhost:3000/items',{
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({item,amount})
      })
    .then(res=>res.json())
    .then(data=>{
        let li = document.createElement('li');
        console.log(data.item, data.amount);
        li.textContent = `${data.item} : ${data.amount}`;

        ul.append(li);
    })
    .catch(e=> {
        console.log(e);
      })

}

form.addEventListener("submit",addItem);


