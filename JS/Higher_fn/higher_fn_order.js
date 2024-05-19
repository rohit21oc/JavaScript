/* function operation(operatorFn,a,b){
    return operatorFn(a,b)
}

// console.log(operation())
function add(a,b){
    return a+b
}
let result = operation(add,5,6)
console.log(result) */
let name ='Rohit'
function greetFunc(){
    return function(){
        console.log("Hello ", name)
        return function(){
            console.log('Hello World')
            return function(){
                console.log('Hello World')
                return function(){
                    console.log('Hello World')
                }
            }
        }
    }
   
} 
console.log(typeof greetFunc)
greetFunc()()()()()