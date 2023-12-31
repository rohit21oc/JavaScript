let arr = [0,1,2,3,4,5,6];
// console.log(arr[0],arr[1]);

// let array = new Array(1,2,0,8,3,4,5);
// console.log(array);
// array.push(6);
// console.log(array);
// array.pop();
// console.log(array);
// array.unshift("Rohit",0);
// console.log(array)
// array.shift();
// console.log(array);
// console.log(array.includes(9));
// console.log(array.indexOf(2))
// // let myArr = [12,15,18,21];
// // console.log(myArr.indexOf(21))

// const joinArray = [0,1,2,3,4,5];
// let newJoinArray = array.join();
// console.log(joinArray)
// console.log( newJoinArray);
// console.log(typeof newJoinArray);

console.log("A", arr);
const arrN1 = arr.slice(1,3);
console.log(arrN1);
console.log("B",arr);
const arrN2 = arr.splice(1,3);
console.log(arrN2);
console.log("C", arrN2);