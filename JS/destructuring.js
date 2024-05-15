/* const arr = [1,2,3,4]

const [a,b,c,d] = [1,2,3];
console.log(a)
console.log(b)
console.log(c)
console.log(d)

const [p,q,r] = [1,2,[12,13,14]]
console.log(p)
console.log(q)
console.log(r)
*/

/*
Destructuring in an object
*/
const person ={
    name: 'Rohit kumar',
    age:20,
    address:{
        city:'chennai',
        state:'Tamil Nadu'
        }
}
const {name,age,address:{city,state}} = person;
console.log(name)
console.log(age)
console.log(city)