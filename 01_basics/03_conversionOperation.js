let score = "33ab"
//console.log(typeof score)
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

//when you want to forcefully change or convert the types
//"33" => 33
//"33df" => NaN not a number
//true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
  
//************************* 

let value = 3
let negValue = -value
//console.log(negValue);
 

//operation
// console. log("1" + 2); //12
// console. log(1 + "2"); //12
// console.log("1" + 2 + 2); //122
// console.log(1 + 2 + "2"); //32

//there is some mdn documents above
// if there is string 1st then everyone is treated as a string
//then it will take it as a string only thats why we got the output 122 not 13
//and in last we the op 32 



console.log(+true) //it will run but it is not a good way

let gameCounter =100
++gameCounter;
console.log()