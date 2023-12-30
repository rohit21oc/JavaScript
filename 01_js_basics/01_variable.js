const accountId = 10010020;
let email = "rohit@gmail.com";
var password = 12345;
accountCity = "Chennai";
let accountState;
console.log(accountId);
/*
Not prefer to use var
because of issue of block scope and functional scope
*/

console.table([accountId, email, password,accountId,accountState]);
