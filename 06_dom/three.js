let div = document.createElement("div");
console.log(div)
div.className = "main";
div.id = "container"
div.id = Math.round(Math.random()*10 +1);
div.setAttribute('title', 'generate title');
div.style.backgroundColor = "wheat"
div.style.color = "green";
let addText = document.createTextNode("Learning JS By chay aur code");
div.appendChild(addText);

document.body.appendChild(div);

// Register
let regiter = document.createElement("h2");
console.log(regiter);
regiter.id = 'regiter';
regiter.style.color = "red"
let regiterForm = document.createTextNode("Registration Form");

regiter.appendChild(regiterForm);

document.body.appendChild(regiter);
// Inputs

let input = document.createElement('input')
console.log(input)
input.id = "text";
input.className = "input";
input.placeholder = "Email";

document.body.appendChild(input)
//form
let form = document.createElement('form');
console.log(form);
form.action = '/server'
// Name
let name = document.createElement('input');
console.log(name)
name.id = 'name';
name.type = 'text';
name.placeholder = "Full name";

// Age

let age = document.createElement('input');
console.log(age)
age.id = 'age';
age.type = 'Number';
age.placeholder = "age";
form.appendChild(name,age);
// Br tag
let br = document.createElement('br');
console.log(br);
form.appendChild(br);

form.appendChild(age);

document.body.appendChild(form)


let btn = document.createElement("button");
console.log(btn)
let bttn = document.createTextNode("Submit");
btn.appendChild(bttn)
// btn.appendChild(form)
form.appendChild(btn)

// document.body.appendChild(btn)
