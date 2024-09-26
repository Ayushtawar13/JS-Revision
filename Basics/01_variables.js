console.log("hello world");

const id=123; //const variable can not be updaated

let city="indore";

// var company="tcs";

function f(){
    var c="tcs";
    console.log(c);
}
f();
console.log(c); // gives error 

/* prefer not to use var because it has problem when defined under a scope */

name1="ayush";

let name; // its value is undefined 


console.log(name1);