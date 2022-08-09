
let cart2 = JSON.parse(localStorage.getItem("item"));

let main = document.createElement("div");
let display_sum = document.createElement("h1");
let sum=0;
main.style.display="flex";
document.body.append(main,display_sum);

const display =()=>{

    cart2.forEach(e => {

        let div = document.createElement("div");
        let name = document.createElement("h1");
        let img = document.createElement("img");
        let price = document.createElement("h2");
    
        let price_text = document.createTextNode(`${e.price}`);
        let name_text = document.createTextNode(`${e.name}`);
        img.src = `${e.url}`;
        img.style.height="auto";
        img.style.width="200px";

        name.append(name_text);
        price.append(price_text);
        div.append(name,img,price);
        div.style.margin="10px";
        main.append(div);
        sum+= Number(e.price);
    });

}
display();
display_sum.textContent = sum;

