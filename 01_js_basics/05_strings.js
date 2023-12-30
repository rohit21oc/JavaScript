// let hello = "hello" + "  world";
// console.log(hello);

const name = "Rohit";
const repoCount = 50;
console.log(`Hello, My name is ${name} and my repo count is ${repoCount}`);

const gameName =new String("BattleGround-pbg-game");
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("l"));
console.log(gameName.substring(0,6));
console.log(gameName.slice(-10,-3));
const newString ="   rohit    ";
console.log(newString);
console.log(newString.trim());

const url ="https://github.com%20rohit21oc";
console.log(url.replace("%20","/"));
console.log(url.includes("rohit"));

console.log(gameName.split("-"))