let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries=()=>{
    groceries.fruits.forEach(element => {
        console.log(element);
    });
}

const cloneGroceries=()=>{ 
    let user = client;
    client="Betty";
    //Change the client variable to “Betty”. 
    // Will we also see this modification in the user variable ?no
    //  Why ? beacuse its passing by value


    let shopping = groceries;
    groceries.totalPrice = `35$`;
    groceries.other.payed=false;
    // Change the value of the totalPrice key to 35$. 
    // Change the value of the totalPrice key to 35$. 
    // Will we also see this modification in the shopping object ? yes
    // Why ? beacuse its an object and its passing by Reference 

    console.log(client,groceries.totalPrice,groceries.other.payed);
    console.log(user,shopping.totalPrice,shopping.other.payed);
}
cloneGroceries();
