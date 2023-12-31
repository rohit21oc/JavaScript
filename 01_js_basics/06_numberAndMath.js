let score = 400;
console.log(typeof score);
const balance = new Number(score);
console.log(balance);
console.log(score == balance);
console.log(score === balance);

console.log(balance.toString().length);
console.log(balance.toFixed(3));
const othernumber= 123.678;
console.log(othernumber.toPrecision(4));

const  bankBal = 100000000;
console.log(bankBal.toLocaleString('en-IN'));



/*+++++++++++++++++++++++++++++++* MATH *++++++++++++++++++++++++++++++++++*/
console.log(Math)
console.log(Math.abs(-3));
console.log(Math.min(1,5,3,6,7,8,));
console.log(Math.max(1,5,3,6,7,8,));

// Random Number
console.log(Math.random());
console.log(Math.random()*10+1);

console.log(Math.floor(Math.random()*10)+1)

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min) +1) + min);
