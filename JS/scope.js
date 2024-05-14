/*
*Globle scope
*/
var name = "Rohit"
console.log(name)

function func(){
    console.log(name)
}
func();


/*
*Local scope / function scope variable
*/

function func1(){
    var num = 60
    console.log(num)
}
func1()
// console.log(num) //It will give error

/*
*Block scope
*/
{
    // var num1 = 512;  // => var is not a Block scope so it will not give error when run as a variable of var
    let num1 = 512;
    console.log(num1)
}
console.log(num1)