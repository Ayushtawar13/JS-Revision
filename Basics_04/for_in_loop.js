// iterates over enumerable properties of objects

let arr=[2,3,34,5,6,7,8,89];
// keys pe hi iterate krta hai for in loop 
for(const key in arr){
    // console.log(key , " " , arr[key]);
}



// mapping array with characters nhiii chalega for in 

let arr3=[2,3,34,5,6,7,8,89];
const map2 = new Map();

for(let i=0 ; i< arr.length ; i++){
    map2.set(`${String.fromCharCode(97+i)}` , arr[i]);
}
// console.log(map2);

// for(const key in map2){
//     console.log("key = "+ key);
//     console.log(key);
// }