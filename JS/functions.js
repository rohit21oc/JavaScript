function helloStudents(){
    for(let i=0;i<10;i++){
        console.log('Hello Student')
    }
}
helloStudents();


function sum(a,b=6){
    return a+b;
}
console.log(sum(5));

function func(){
    console.log(arguments)

}
func(1,2,3,4,5,6,7,8,9)