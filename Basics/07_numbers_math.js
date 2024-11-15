
let num = 100;
// console.log(num);

// creating number using object 

let n = new Number(400);
console.log(n);

/*Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
Returns a string representing a number in fixed-point notation.*/ 

n.toFixed(1)
console.log(n.toFixed(2));

console.log(n.toString()); // converts number into string

console.log(n.toString().length);

/*Converts a number to  a string by using the current or specified locale.*/
const rs =2335630000;
// console.log(rs.toLocaleString('en-IN')); // indian rupees ke hisab se , lga dega

const f=23.45675;
// console.log(f.toPrecision(3)); //precise number print krta hai jese round off


//  math   ----------------------------------------------------------------------------------------------------------------------------------

const math = 30498.30954;
console.log(Math.round(math));

// console.log(Math);
console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // math.random gives values between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

// below line gives values between 1 to 6 
console.log("1 to 6");
console.log(Math.floor((Math.random()*((max-min)) + min)));