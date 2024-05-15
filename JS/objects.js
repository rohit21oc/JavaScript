/*let user ={
    name: 'Rohit Kumar',
    id:12345,
    email:'rohitkumar@gmail.com'
}
console.log(user.name)
console.log(user['name']);

// Add key and value
user.city = 'Chennai';
user["Native_Place"] = 'Bihar'

console.log(user);

// Delete key and value
// delete user.Native_Place
// console.log(user)
delete user['Native_Place']
console.log(user)

*/
let person ={
    name:'Rohit kumar',
    age:20,
    address: {
        city:'Chennai',
        state:'Tamil Nadu',
        country:'India'
    }

}
for(let key in person){
    console.log(key , ' => ' , person[key]);
}
console.log(Object.keys(person))
console.log(Object.values(person))

// get both key and value
console.log(Object.entries(person))

// Cloning an object using assign

const new_Person = Object.assign({},person)
console.log(new_Person)

// We can add new key and value

const new_Person_1 = Object.assign({},person,{role:'developer'})
console.log(new_Person_1)