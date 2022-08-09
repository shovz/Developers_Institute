let products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];

let main = document.createElement("div");
let pay = document.createElement("button");

pay.textContent  = "pay meeee";
main.style.display="flex";
document.body.append(main,pay);

let cart = JSON.parse(localStorage.getItem("item")) || [];

const StorageMe = (e) => {
	e.preventDefault();
	let objectItem = {
			name : e.target.previousElementSibling.textContent,
            url: e.target.src,
            price : e.target.nextElementSibling.textContent,
		}
        cart.push(objectItem);

    localStorage.setItem("item", JSON.stringify(cart));
}


const display =()=>{
    for (let i = 0; i < products.length; i++) {

        let div = document.createElement("div");
        let name = document.createElement("h1");
        let img = document.createElement("img");
        let price = document.createElement("h2");
    
        let price_text = document.createTextNode(`${products[i].price}`);
        let name_text = document.createTextNode(`${products[i].name}`);
        img.src = `${products[i].url}`;
        img.style.height="auto";
        img.style.width="200px";


        img.addEventListener("click",StorageMe);

        name.append(name_text);
        price.append(price_text);
        div.append(name,img,price);
        div.style.margin="10px";
        main.append(div);
        
    }
}
display();

const payme = (e) => {
	e.preventDefault();
    location.href='index2.html'
}

pay.addEventListener("click",payme);