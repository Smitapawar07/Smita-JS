let smi = "bhjbs"
//its permanant value fixed values will be store here
const accountId =122

//for behalf of var we used let
let accountEmail ="smitapwar2828@gmail.com"

//if we only define the varibale but didnt assign any value then its gives us undefined 
let accountState;

//we didnt use var ...beacuse issue in block scope and functional scope
var accountPass ="1234"

//it is possible without declaring the variable we can write it
accountCity="Pune"

//accountId=2 // not allowed
accountEmail="dsfn"
accountPass="jhb"
accountCity="cdhb"
console.log(accountId);

//for printing the all variables at a time in one console we used the console.table
console.table([accountEmail,accountId,accountPass,accountCity,accountState])