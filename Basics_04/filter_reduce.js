const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )


let arr = [1,2,3,4,5,6];

let nums = arr.filter( (item) => {if(item > 3) return item;});
console.log(arr)
console.log(nums);

for(let item in nums){
    // console.log("key " ,item  ," value ", nums[item]);
}
// console.log(typeof(nums));

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const history = books.filter( (bk) => bk.genre === 'History' );
// console.log(history);

const publish = books.filter( (bk) => bk.publish >= 2000 );
// console.log(publish);

const edition = books.filter( (bk) => { return bk.edition >= 2000 && bk.genre === 'Fiction'})
// console.log(edition);

// console.log(typeof(history));

// Why does typeof(history) return 'object'?

// In JavaScript, arrays are a type of object. The typeof operator will always return 'object' for arrays, even though they have additional features such as indexed elements and methods like .filter().
// To confirm if a variable is an array, you can use:

// console.log(Array.isArray(history)); // true

// console.log(typeof(history));

for(let item in history){
    // console.log("key " ,item  ," value ", history[item]);
}

let arrCheck = [1,2,3,4,5];
console.log("yeahh broo " , Array.isArray(arrCheck , 1));
// reduce 

const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// console.log(priceToPay);

let sum = arrCheck.reduce( (acc , cur) => {
    return cur+acc; 
} , 15)

console.log(sum)