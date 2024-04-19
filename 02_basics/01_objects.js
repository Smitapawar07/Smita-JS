//singleton when we create from the constructor then it is known as sinlgeton

//when we declare it as literals then singleton will be not created
//by constructor it will be created

//object literals
//Object.create: this method is known as by using constructor it will created singleton
//in objects there will be the key value pairs

//take one symbol and add as it key then that object ele as in the square bracket syntax
const mySym = Symbol("key1")
const JsUser ={
    name: "smita", 
    age : 18,
    [mySym] : "mykey1",
    "full name" :"Smita Pawar",
    email: "pawarsmitas191@gmail.com",
    isLoggedIn : false,
    lastLoginDays:["Monday","saturday"]
}
//this is how we declare the objects.

//this is how we access the 
//but this is not correct way to access 
// console.log(JsUser.email);

// console.log(JsUser["email"]);

//so in this case when the key is like full name  so by dot we cant access the objects so thats why by the brackets Its square notations
//console.log(JsUser.full name);//it will get the error

// console.log(JsUser["full name"])
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

//----we can change the values as this
JsUser.email = "smitapawa12@gmail.com"
//-----if we want fixed or want unchangeble value then we can freeze it
//Object.freeze(JsUser)
JsUser.email= "dbcsc"
// console.log(JsUser);


//add the function treat var as a fun

JsUser.greeting = function(){
    console.log(`"hi this is me",${this.name}`);//back tick for concatnating and by this if want the reference obj 
}
console.log((JsUser.greeting));
console.log((JsUser.greeting()));






//-------------------------------