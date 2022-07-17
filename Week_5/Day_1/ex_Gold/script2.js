
let info = JSON.parse(localStorage.getItem(`info`));
// console.log(info);
let {fname:fname, lname:lname} = info;
let textarea =document.getElementsByTagName("textarea")[0];

textarea.textContent = `${fname} + ${lname}`;