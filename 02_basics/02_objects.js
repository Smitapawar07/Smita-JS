//how can we declare the singleton value by using the constructor

 const tinderUser ={} //op same {}//this is non singleton obj
// //const tinderUser =new Object() //this is sinlgeton obj
 tinderUser.id="3223"
 tinderUser.name ="sddc"
 tinderUser.isLoggedIn = false
// console.log(tinderUser);//op is {}

//we can give objects as a nested one

const regUser = {
    email : "dfcgh@.com",
    fullname:{
        userfullname:{
            name:"sd"
        }
    }
}
//console.log(regUser.fullname.userfullname);

const obj1 ={1:"a",2:"d"}
const obj2 ={3:"k",4:"n"}
const obj3 ={5:"g",6:"l"}
//const obj4 ={obj1,obj2,obj3}
//const obj4 =Object.assign({},obj1,obj2,obj3)
//console.log(obj4);

//here we want to combine the obj ele but we facing the pb as same as arr so by assigning the value we can easily combine the value
//here we add one ampty parenthesis because of there may be more than two object needs to combine


// we will use this spread method for doing this
//{ '1': 'a', '2': 'd', '3': 'k', '4': 'n', '5': 'g', '6': 'l' }
const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);


const users = [
    {
    id:1,
    email:"ddsaf@.com"
    },
    {
        id :1,
        email : "gvjhsd@.com"
    }

]


users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('name'));


//part 3

const cousre={
    coursename:"js",
    price:"67",
    courseinstructor : "youtube"
}
//cousre.courseinstructor //or we can do asa bhi
const{courseinstructor :teacher}=cousre
//console.log(courseinstructor);
//we can change the name as like this this is called obj destructing
console.log(teacher);
//we can get this accessing

//API

//we got some values from backend and how write it before it comes in xml format but its so complicated so now it comes in JSON format

// {
//     name:"c",
//     csname:"cwe",
//     price:"cws"// here we got the err so 
//     //this is known json
// }

// {
//     "name":"c",
//     "csname":"cwe",
//     "price":"cws" 
//     //this is known json in json keys also is a string
// }

//also we can get the api as in array format
//js object notation 
[
    {

    }
]