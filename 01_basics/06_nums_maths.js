const score = 400
// console.log(score);
const balance =new Number(100)
// console.log(balance);

//console.log(balance.toString().length);
//tofixed for rounding the floating value 
// console.log(balance.toFixed(3));

//it will round of the value 
const num2 = 23.9999
// console.log(num2.toPrecision(3));

const num3 = 1000000000
// console.log(num3.toLocaleString("en-IN"));





//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""

//math

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.8));
// //ceil means top if want value always top value like if its 4.2 it will convert it into only in 5
// console.log(Math.ceil(4.2));
// //floor means bottom if want value always less value like if its 4.9 or 4.2 it will return it into only in 4
// console.log(Math.floor(4.2));
// console.log(Math.min(4,2,4,6,7,8));

//it always give us only in 0 to 1 range
console.log(Math.random());
//value can be zero also thats why we add the + 1 in it
//
console.log((Math.random()*10 )+ 1);
console.log(Math.floor(Math.random()*10 )+ 1);
const min =10
const max = 20
console.log(Math.floor(Math.random()*(max-min +1))+min);
