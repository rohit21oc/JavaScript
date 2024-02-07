// const user = {
//     username : "rohit21oc",
//     pass : 12345,
//     welcomeMessage : function(){
//         console.log(`${this.username} Welcome in my YouTube channel`)
// console.log(this)
//     }
// }
// user.welcomeMessage();
// user.username = "Engineer"
// user.welcomeMessage();

// function chai(){
//     console.log(this)
// }
// chai();

// const chai = function(){
//     username : "rohit"
//     console.log(this)
// }

const chai = () =>{
    username : "rohit"
    console.log(this)
}
chai();

// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }
const addTwo = (num1,num2)=> (num1+num2);
console.log(addTwo(10,20));

const obj = ()=>({username:"rohit"})
console.log(obj())


let  arr = [1,2,3,4,5,6];
// arr.forEach(function(){
//     return arr;
// })
arr.forEach(()=>{
    return arr;
})
console.log(arr)