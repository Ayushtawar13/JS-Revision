// number to string 

let num =23;
// console.log(typeof num);
// console.log( num);

let strNum = String(num);
// let numwe = CharacterData(num);

// number to characters  

var chr = String.fromCharCode(97 + num); // where n is 0, 1, 2 ...
// console.log(chr)

// console.log(typeof strNum);
// console.log( strNum);

// string to number 

let name1 = "ayush";
// console.log(typeof name1);
// console.log( name1);

let num1= Number(name1);
// console.log(typeof num1);
// console.log( num1);  // value NAN not a number 

// boolean to number and boolean to string 

let bool = true ;
// let x = Number(bool);
// let s = String(bool);
// console.log(typeof s);
// console.log( s);
// console.log(typeof bool);
// console.log( bool);
// console.log(typeof x);
// console.log( x);

// number to boolean 
 
let isLoggedIn = 1;
console.log(typeof isLoggedIn);
console.log( isLoggedIn);

let boolIsLoggedin = Boolean(isLoggedIn);
console.log(typeof boolIsLoggedin);
console.log( boolIsLoggedin);   // vlaue is true 

// empty String to bool 

let str2 = " "; // empty string false  //   there is string containing spcae then it gives true

let bool1= Boolean(str2);
// console.log(typeof bool1);
// console.log( bool1);

// operations  ====================================================================================================

// exponent 

let exp = 2**2**2;
// console.log(exp);

// string pehle aati hai toh addition nhi hoga concatination hoga
// console.log("1"+2+2); 

// pehle numbers ka addition hoga uske bad concatination hoga string ka 
// console.log(1+2+"2"+"2"+3);

// console.log(+true); // ye chalega  but  

// let n , n1 , n2 ;
// n = n1 = n2 =  2+2;

// console.log(n);

// console.log("1"-1);    //  0

// console.log("1"+1);    //  11

// console.log(1-"1");    //  0

// console.log("2"*2);       //  4

// console.log(2 * "2");  // 4

// console.log(2 / "2");  // 1

// console.log("2"/2);      //1