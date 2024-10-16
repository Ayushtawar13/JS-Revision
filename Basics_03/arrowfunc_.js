// "this" :- is used to refer the current contextv

const user = {
    name : "ayush",
    price:2240,

    welcomeMessage : function(){
        console.log(`hello ${this.name}`);
        console.log(this);

    }
}

// user.welcomeMessage();
// user.name = "hulllla "
// user.welcomeMessage();
// console.log(`hello ${this.name}`);
// console.log(this)



function f1(){
    const name = "javascript";
    console.log(this) // bda global object print karega
    console.log(this.name); // undefined kam nhi krta eddhr 
}

// f1();


const f2 = () =>{
    let user = "ayush";
    console.log(this.user) // undefined
    console.log(this)  // {}

}

// f2();

// normal arrow function 

const addtwo = (n1 , n2) => {
    return n1+n2;
}
// console.log(addtwo(3,4));


// implicit return type arrow function  ;- apne ko btana nhi padta single line rehti hai toh khud hi samajh jata hai function 

// arrow function me {} bracket lagaya toh return keyword likhna hi padega


const add = (n1 , n2) => n1+n2 ;  // or   const add = (n1 , n2) => ( n1+n2 );

// console.log("ayush")

// console.log(add);

// let myarr = [1,2,3,4,5,6,8]

// myarr.forEach( (value) => console.log(value)) // foreach loop using arrow function 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// immideately invoked functions 

(function db(){   // named iife
    console.log("db connected successfully 1")
})();  // semicolon is important here 


(function db(name){
    console.log(`db connected successfully 2 ${name}`)
})("chai chai ") ;


( () => console.log("db connected successfully 3 "))()

