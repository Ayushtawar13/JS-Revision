// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// objects iteratable nhi hai 

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }



// mapping array with characters 
let arr3=[2,3,34,5,6,7,8,89];
const map2 = new Map();
let ch ='a';
for(let i=0 ; i< arr.length ; i++){
    map2.set(`${String.fromCharCode(97+i)}` , arr[i]);
}
// map2;

for(const [key , value] of map2){
    console.log("key = "+ key +" value = "+value);
    console.log(typeof(key));
}
