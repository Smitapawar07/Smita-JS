//if

// if(condition)//if condition is true then an then only the scope will be executed 
// {

// }


// const isUserLoggedIn= true
// if(2==2){

// }


//it will give ex of scope and give the err

// const score =200
// if (score >100) {
// const power = "fly"
// console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);



// const balance=1000
// //if(balance>500)console.log("test");//inplicitly defining

// if(balance<500){
// console.log("less than");
// }else if(balance<689){
//     console.log("it is");
// }else if(balance<900){
//     console.log("less tha 900");
//     }else{
//         console.log("less than 1899");
//     }


const userLoggedIn=true
const debitCard = true
const loggedInFromEmail=true
const loggedInFromGoogle=true

if(userLoggedIn && debitCard)
{
    console.log("allow to buy");
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}