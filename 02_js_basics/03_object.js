const mySym = Symbol("key");
const student = {
    "full name": "Rohit kumar",
    age:20,
    gmail:"rohitkumar@gmail.com",
    mySym:"key1",
    number:1234567890,
}
console.log(student.gmail);
console.log(student["gmail"]);
console.log(student["full name"]);
console.log(student.mySym);
console.log(mySym)

let obj1 = { "a": 1, "b":2}
let obj2 = { "c": 1, "d":2}
let obj3 = { "e": 1, "f":2}
let obj4 = { "g": 1, "h":2}

// let obj3 = {obj1, obj2};
// console.log(obj3);

let obj5 =Object.assign({}, obj1 ,obj2,obj3,obj4);
console.log(obj5);