// Exercise 1 : Select A Kind Of Music
// 1 Display the value of the selected option.

// 2 Add an additional option to the select tag:
// <option value="classic">Classic</option>

// 3 The newly added option should be selected by default.


// let selected = document.getElementById("genres");
// console.log(selected.options[0].value,selected.options[1].value);

// let clasic = document.createTextNode("Clasic");
// let option = document.createElement("option");
// option.appendChild(clasic);

// option.value = "classic";
// selected.appendChild(option);
// option.setAttribute("selected",`selected`);// option.selected=true;
// selected.options[1].removeAttribute("selected");
// console.log(selected);


// Exercise 2: Delete Colors
// Add a click event listener to the <input type="button">. 
// When clicked on, it should call a function named : removecolor() 
// that removes the selected color from the dropdown list.

// let btn = document.forms[0].lastElementChild;
// let select = document.getElementById("colorSelect");

// const removecolor= (event)=>{
//     event.preventDefault();
//     select.remove((select.selectedIndex));
// }
// btn.addEventListener("click",removecolor);


// Exercise 3 : Create A Shopping List
// 1. Create an empty array. For example: let shoppingList=[].
// 2. Create a form containing : a text input field and an “AddItem” button.
//    Add this form to the DOM.
// 3. Type what you need to buy in the text input field, then add the new item
//    to the array as soon as you click on the “AddItem” button (Hint: create 
//    a function named addItem()).
// 4. Add a “ClearAll” button to the DOM, that when clicked on, 
//    should call the clearAll() function (see below).
// 5. Create a function named clearAll() that should clear out all the
//    items in the shopping list.

let shoppingList=[];

let form = document.createElement("form");
let input = document.createElement("input");
let btnAdd = document.createElement("input");
let btnText = document.createTextNode("Add Item");
let btnClear = document.createElement("button");
let i=0;
let ul = document.createElement("ul");

btnAdd.appendChild(btnText);
btnAdd.value = btnText.textContent;
btnAdd.type="submit";
input.type = "text";
btnClear.textContent="clear all";
form.append(input,btnAdd);
document.body.append(form,btnClear);


const changeinput=(event)=>{

    shoppingList[i] = event.target.value;
}

const addItem=(event)=>{
    event.preventDefault();
    if(input.value!==""){
        let li = document.createElement("li");
        li.textContent = shoppingList[i];
        ul.appendChild(li);
        document.body.append(ul);
        i++;
        console.log(shoppingList);
        input.value="";
    }
}
const clearList=()=>{
    shoppingList=[];
    i=0;
    while(ul.firstChild){
        ul.removeChild(ul.firstChild);
    }
}


input.addEventListener("input",changeinput);
form.addEventListener("submit",addItem);
btnClear.addEventListener("click",clearList);
