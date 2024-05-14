// Arrow Functions
var sum = (a,b)=>(a+b);
var c = sum(10,15)
console.log(c)

var process =(a,b)=>{
    console.log('We have to process this')
    console.log(arguments)
    return a*b;
}
console.log(process(20,5));


(
    function(){
        console.log("Hello student")
    }
)() //Anonimous function