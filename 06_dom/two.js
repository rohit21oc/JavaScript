const parent = document.querySelector(".parent")
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[0].textContent)

// for(let i = 0; i<=parent.children.length;i++){
//     console.log(parent.children[i].innerHTML)
// }
parent.children[1].style.color = "orange"
parent.style.textAlign= "center"
console.log(parent.firstElementChild.innerHTML);
console.log(parent.lastElementChild.innerHTML);

const dayOne = document.querySelector(".day")
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling.innerHTML);

console.log("Nodes",parent.childNodes)