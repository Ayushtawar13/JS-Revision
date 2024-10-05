// object literals 

// let obj = Object.create(null);
// obj.name="ayush";
// console.log(obj);

// let baseObject = { clg: "iist" };  // Base object for inheritance
// let obj = Object.create(baseObject);  // Inherit from baseObject
// obj.name = "ayush";

// baseObject.name = "ayush";

// console.log(obj);
// console.log(baseObject);

// syntax for inserting an Symbol as an key in a object 

const sym = Symbol("symbol1");

let obj2 = {
    name:"ayush",
    // sym1:"symbol wrong way",
    [sym]:"symbol right way",
    location :"indore",
    clg:"iist"
}

// console.log(obj2);
// console.log(obj2);
// console.log(typeof obj2.sym); // sym is a astring not a symbol

console.log(obj2[sym]);
console.log(obj2);



// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());