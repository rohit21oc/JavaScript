
var c = 300;
if(true){
    // let a = 10;
    const b = 20;
    c = 30;
}
// console.log(a)
// console.log(b)
console.log(c)


function one(){
    const username = "rohit21oc";
    function two(){
        let username = "engineer_rohit";
        let website = "youtube"
        console.log(username);
    }
    // console.log(website)
    two();
}
console.log(one())
one();

if(true){
    let username = "rohit21oc";
    if(username ==="rohit21oc"){
        let website = " youtube"
        console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


function addOne(num){
return num +1;
}
let a = addOne(10);
console.log(a)

const addTwo = function addOne(num){
return num +2;
}
console.log(addTwo(10))

let a1 = addThree(12);
function addThree(num){
    return num + 3;
}
console.log(a1);

addFour(10);
const addfour = function addFour(num){
    return addFour;
}
// It will give error