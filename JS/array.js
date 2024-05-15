// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr.slice(2))
// console.log(arr.slice(2,9))
// console.log(arr.slice(2,11))
// console.log(arr.slice(-10,-1))

let num = [1,2,3,4,5,6,7]
let removed = num.splice(2,2)
console.log(num)

/*
Reverse
*/
// let rev = num.reverse();
// console.log(rev)

console.log(num.indexOf(7))
console.log(num.indexOf(71))

// Sort


let arr_num = [33,5,41,2,61,1];
arr_num.sort((a,b)=>a-b);
arr_num.sort((a,b)=>b-a);
console.log(arr_num)