// const arr =[1,2,3,4,5]
// //forof
// for (const value of arr) {
//     //console.log(value);
// }



// const greeting ="heeedfc dfece"
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`);
    
// }


//maps : it will same as arr iteration will be there it will hold key value pair
//it will store the unique values only

const map =new Map()
map.set('IN',"India")
map.set('USA',"United State Of America")
map.set('FR',"France")
map.set('IN',"India")
//console.log(map);



for (const [key,value] of map) {  //here arr destructuring
    console.log(key,':',value);
    
}


//object

const myObj={
    "game":"dsf",
    "game2":"awdxa"
}
// for (const [key,value] of myObj) {
// console.log(key,":",value);    
// }

//it will give the error object is not iteratable by this method 