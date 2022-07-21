let from = document.getElementById("from");
let to = document.getElementById("to");
let amount_input = document.getElementById("amount");
let result = document.getElementById("result");
let submitBtn = document.getElementsByTagName("form")[0];
let amount;
let currency1;
let currency2;

const set_currencies = (currencies)=>{

    let available_currencies_tag;
    let available_currencies_name;
    for(let i = 0;i<currencies.supported_codes.length;i++){
        
        available_currencies_tag= currencies.supported_codes[i][0];
        available_currencies_name= currencies.supported_codes[i][1];

        let option = document.createElement("option");
        let option_text = document.createTextNode(`${available_currencies_tag} - ${available_currencies_name}`);
        option.value = `${available_currencies_tag}`;
        option.append(option_text);

        let option2 = document.createElement("option");
        let option2_text = document.createTextNode(`${available_currencies_tag} - ${available_currencies_name}`);
        option2.value = `${available_currencies_tag}`;
        option2.append(option2_text);

        from.append(option);
        to.append(option2);
    }
    currency1= from[0].value;
    currency2= to[0].value;
}

const currencies_fetch = async ()=>{

    try{
        let currencies = await (await fetch
            (`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/codes`))
            .json();
        set_currencies(currencies);
        // console.log(currencies.supported_codes[0]);
        // console.log(currencies.supported_codes.length);
    }
    catch(err){
        console.log("error",err);
    }
}
const exchange = async (event) =>{
    event.preventDefault();
    try{
        let currencies_exchange = await (await fetch
            (`https://v6.exchangerate-api.com/v6/4b15e8d0eb3326f5e043117c/pair/${currency1}/${currency2}/${amount}`))
            .json();
        console.log(currencies_exchange.conversion_result);
        result.value=`${currencies_exchange.conversion_result}`;
    }
    catch(err){
        console.log("error",err);
    }
}
currencies_fetch();


from.addEventListener('input',()=>currency1 = from.value);
to.addEventListener('input',()=>currency2 = to.value);
amount_input.addEventListener("input",(event)=>{amount= event.target.value})
submitBtn.addEventListener("submit",exchange);

