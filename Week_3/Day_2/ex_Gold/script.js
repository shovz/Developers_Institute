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

let btn = document.forms[0].lastElementChild;
let select = document.getElementById("colorSelect");

const removecolor= (event)=>{
    event.preventDefault();
    select.remove((select.selectedIndex));
}
btn.addEventListener("click",removecolor);