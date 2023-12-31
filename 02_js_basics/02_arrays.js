const student = ["Rohit", "Sumit","Deepak"];
const student2 =["ranjeet","utkarsh","arjun"];
// const newSt = student.push(student2);

// console.log(student)
const allStudent = student.concat(student2);
// console.log(student2);
console.log(allStudent);
console.log(...student,...student2);

let num = [1,2,3,[4,5],6,7,[8,9]];
let newNum = num.flat(Infinity);
console.log(num);
console.log(newNum);


console.log(Array.isArray("Rohit"));
console.log(Array.from("Rohit"));
 console.log(Array.from({name: "Rohit kumar"}));// interesting


 let score = 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score,score2,score3));
//  console.log(score, score2,score3);
