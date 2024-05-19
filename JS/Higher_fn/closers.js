/* function func(){
    let name = 'rohit'
    console.log(name);
}

console.log(func())
console.log(name) */

function outerFn(){
    let outerVar = 'I am Outer Variable'

    function innerFn(){
        console.log(outerVar)
    }
    return innerFn
}
let fn = outerFn()
// console.log(fn)
fn()
outerFn()


function certificateNumber(){
    let num = 100;
    return function(){
        num++;
        console.log('New Student certificate',num)
    } 
}
let new_stu = certificateNumber();
new_stu()
new_stu()
new_stu()
new_stu()
new_stu()
new_stu()