/*
syntax related
*/
// console.log('Hello


// Run time exceptions
/*
let x = 5;
console.log(x.toUpperCase());
let y = '5';
console.log(y.toLowerCase());
*/

// Logical error
/*
let num = 5;
for(let i = -3;i<6;i++){
    console.log(num/i);
}
*/

// let obj = undefined;
// console.log(obj.name);
try{
    let obj = {
        name : 'Rohit Kumar',
        age : 20
    }
    console.log(obj.name)
    console.log(obj.age)
}catch(err){
    console.log("Exception Handled")
    console.log(err)
}
