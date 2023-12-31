let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 31);
let myCreatedDate = new Date("2024-01-01");

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());

let indianDate = new Date("01-15-2024");
console.log(indianDate.toDateString());
console.log(indianDate.toLocaleDateString());

let timeStamp = Date.now();
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());
// console.log(date.now()/1000);
console.log(Math.floor(Date.now()/1000));

let getDate = new Date();
console.log(getDate);
console.log(getDate.getTime());
console.log(getDate.getMonth());
console.log(getDate.getDay());