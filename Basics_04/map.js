let arr = [1,2,3,4,5,6,7,8,9,10];

const incre = arr.map( (i) => i+10 );
console.log(incre)
console.log(arr)


const newNums = []

arr.forEach( (num) => {
    return newNums.push(num+10)
} )

// console.log(newNums)

// chainning of properties 

const ans = arr.filter( (value) => value>5 )
            .map( (value) => value*10);
console.log(ans);
