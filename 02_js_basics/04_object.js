var obj = new Object(123);
var newObj = {};
newObj.id = 123;
newObj.userName = "rohit21oc";
newObj.email = "rohit@gmail.com";
newObj.city = "Patna"
// console.log(newObj);
// console.log(obj);

console.log(newObj);
console.log(Object.keys(newObj));
console.log(Object.values(newObj));
console.log(Object.entries(newObj));
console.log(newObj.hasOwnProperty("email"));


var regularUser = {
    email:"rohitkumar@gmail.com",
    fullName:{
        newFullName:{
            firstName:"Rohit",
            lastName:"Kumar"
        }
    }
}
console.log(regularUser.fullName.newFullName.firstName)
var obj1 = { "a": 1, "b":2}
var obj2 = { "c": 1, "d":2}
var obj3 = { "e": 1, "f":2}
var obj4 = { "g": 1, "h":2}

// let obj3 = {obj1, obj2};
// console.log(obj3);

// var obj5 = Object.assign({}, obj1 ,obj2,obj3,obj4);
// console.log(obj5);

var obj5 = {...obj1,...obj2};
console.log(obj5);

const arr = [
    {
        id:5043,
        userName:"rohit210c"
    },
    {
        id:5043,
        userName:"rohit210c"
    },
    {
        id:5043,
        userName:"rohit210c"
    }
]
console.log(arr);

const course ={
    courseName : "JavaScript",
    price: 999,
    courseInstructer: "Rohit"
}
const {courseInstructer:instructer} = course;
console.log(course.price);
console.log(instructer);
