var num = 20;
if(num % 2 ==0){
    console.log('Even')
}else{
    console.log('Odd')
}

console.log('After if')
var num = 145;
// Ternary operator
num %2 ==0 ? console.log('even'):console.log('Odd');

// num>=5 ? num > 5 ?  console.log('Num is greater than 5'):console.log('Num is greater than and Equal to 5'):console.log('Num is less than 5');

if(num>=5){
    if(num>5){
        console.log('Num is greater than 5')
    }else{
        console.log('Num is greater than and Equal to 5')
    }
}else{
    console.log('Num is less than 5')
}

// Switch statements
var fruit = 'mango';
switch(fruit){
    case 'mango':
        console.log("it's a fruit ");
        break
    case 'banana':
        console.log("it's a fruit")
        break;
    default :
    console.log("Not valid fruit");
    
}