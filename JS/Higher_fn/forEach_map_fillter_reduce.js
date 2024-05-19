

// let objects = {
//     Dhoni : 'Batter, Keeper',
//     Sachin: 'Batter',
//     Virat:'Batter',
//     Rohit:'Batter'
// }
// objects.forEach((obj)=>(console.log(obj)))

let players = ["Sachin", "Dhoni","Virat","Rohit"];
players.forEach((player)=>(console.log(player)))

console.log(players)

// Map function

let arr = [1,2,3,4,5,6,1097853];

let arr_quib = arr.map((i)=>(i**3))
console.log(arr_quib);
console.log(arr.push(12))
console.log(arr.unshift(12))
console.log(arr.pop())
// console.log(arr.shift())
console.log(arr)

// Filter

let numbers = [1,2,3,4,5,6,234,67546,754,56758,5,78894356,4778,89782345,5634,6346,4];
let filtered = numbers.filter((num)=>num%2==0);
console.log(filtered);

// reduce function

let newArr = [1,2,3,4,5,6,21];
let newArr_sum = newArr.reduce((curr,next)=>(curr+next));
console.log(newArr_sum)