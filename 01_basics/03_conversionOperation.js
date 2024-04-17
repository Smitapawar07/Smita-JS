let score = "33ab"
console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//when you want to forcefully change or convert the types
//"33" => 33
//"33df" => NaN not a number
//true => 1; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);