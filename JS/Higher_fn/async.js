console.log('Hello from the first line');

// setTimeout(function hello(){
//     console.log('Hello from inside the function')
// },3000)
setTimeout(()=>
    {console.log('Hello from inside the function')},3000)

console.log("Hello from the last line")