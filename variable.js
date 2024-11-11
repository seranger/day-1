// Variables

// Strings
// let name = "Surur";
// const name = "Surur";
// var name = "Surur";

// Numbers
// let number = 10;

// Boolean
// let value = true; //false

// Null
//  let value = null;

// console.log(`My name is ${name}`); //normal
// console.log("My name is " + name); //Alternative (Concatenation)

// console.log("My name is " + name + " and my number is " + number);
//console.log('my name is \n' + name + num);

//array
// let myArray = ['anything',2, true, 'string']
// console.log(myArray[0]); //indexing

//camelcase -> myArray (always used in JS)
//Pascalcase -> MyArray
//kebabcase -> my-array (only use in vue)
//snakecase -> my_array

//object literal - declare (make) an object
// // let table={
// //     material: "wood",
// //     no_of_legs: 4,
// //     occupied: true
// }


//bracket notation
// console.log(table["material"]);
//dot notation
// console.log(table.material);
//destructuring
// let {material} = table;
// let {occupied} = table;
// let (material,occupied) = table;
// console.log(material);

//functions
// () -> parentheses
// [] -> brackets
// {} ->braces
// function greeting(a,b){ //value inside parentheses are parameters
// console.log('This is a greeting'+a+b);
// }

// greeting(3); //value inside parentheses are arguments

let mystring = "Something";
// string.length shows us the length of the string
console.log(mystring.length);

// string.toLowerCase() makes the string lowercase
console.log(mystring.toLowerCase());

// string.toUpperCase() makes the string uppercase
console.log(mystring.toUpperCase());

// string.split('') splits the string into an array
let split = mystring.split('');
console.log(split);