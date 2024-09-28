//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

/* In JavaScript, the Symbol is a primitive data type introduced in ES6. It is created using the `Symbol()` function,
 which returns a unique symbol value each time it is called. Symbols are immutable and unique, making them useful 
 for creating property keys that are guaranteed to be unique across different objects. They are often used to 
 define non-enumerable object properties.
*/

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) :- return type object :- function ka type deta function hai but hota objectFunction hai =llllllllllll

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

