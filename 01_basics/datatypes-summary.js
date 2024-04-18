//in official documentation there is only two main datatypes
//1.primitive 2.non-primitive/reference type
//it is based on call by value call by reference

//primitive: call by value 
//7 types : String,Number,boolean,null,undefined,symbol(unique for component),bigint
//JS is dynamically typed 
/*JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them. */




const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id= Symbol('123')
const anotherId = Symbol('123')
//so we will get the op false because we know that symbol creates the unique id
console.log(id === anotherId);



// Non -primitive :reference will gives us
// 3 types :array,objects , functions 
const heros =["srk","sdk","dcc"]//curly brackets me objects
let myObj = {
    name:"smita",
    age : 33,
}

//function we treat it as a var
const myFunction =function{
    console.log("hii")
}

//datatype of fun is fiunction object
// non pri data type is object