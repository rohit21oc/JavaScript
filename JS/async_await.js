// async function getMsg(){
//     return "Hello Students"
// }
// getMsg().then((res,err)=>(console.log(res)))
/*
console.log("Hello from begining line")
function hello(res,rej){
   setTimeout(() => {
    console.log("Hello students")
   }, 3000);
}

console.log('Last line')
hello()

*/


console.log("Hello from start line")
async function getMessage(){
    console.log("Hello first line")
let data = new Promise((res,rej)=>{
    setTimeout(() => {
        res('Hello From resolve')
    }, 3000);
})
console.log("Hello from the function")

let result = await data;
console.log(result)
console.log('Hello from last line')

}
getMessage();
console.log("Hello from end line")
