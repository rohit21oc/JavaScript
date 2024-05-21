let name = 'Rohit'
let city = 'Chennai'
console.log(name,city)

console.log(typeof name)

console.log(name[4])
name[2] = 'p'

console.log(name)
console.log(name.length)

let first_name = 'Rohit'
let last_name = ' Kumar'

let full_name = first_name+last_name;
console.log(first_name.toUpperCase())
console.log(last_name.toUpperCase())
console.log(first_name.concat(last_name))

console.log(first_name + last_name)


/*
Slice
*/
console.log('Slicing')

console.log(full_name);
console.log(full_name.slice(2));
console.log(full_name.slice(2,11));
console.log(full_name.slice(-5,-1));

/**
 * indexOf
 **/

let word = 'Rohit Sahni'
let newWord = " Apple "
console.log(word.indexOf('S'))
console.log(word.indexOf('s'))
/*
Trim
*/
console.log(newWord)
console.log(newWord.trim())


/**
 * Split
 **/

let dept = 'B.tech in Information Technology';
console.log(dept.split(' '))
console.log(dept.split(''))