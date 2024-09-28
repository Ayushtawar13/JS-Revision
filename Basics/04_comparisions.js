
// retruns true because :- comparision operator in javascript converts string into number 

console.log("2" > 1); 
console.log("02"> 1);  //returns true


console.log(null>0);  // false beacuse null converted to number 0 and 0>0 false

console.log(null == 0); // equality operator works differently :- null == 0 is false 

console.log(null >= 0); // returns true because :- again comparision operator - 0 >= 0 is true 

console.log(undefined>0); // false in all above cases also

console.log( "2" == 2);  // true  :-  loose equality 

console.log( "2" === 2);  // strict equality :- it does not  
