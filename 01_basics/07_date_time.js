//date

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// //interview question what is a date retun type so its object
// console.log(typeof myDate);


//if you want to create the date then also in JS months starts from 0
// let myCreatedDate = new Date(2023 , 4 , 23)
// let myCreatedDate2 = new Date(2023 , 4 , 23,5,4,5)

// console.log(myCreatedDate2.toLocaleString());
// console.log(myCreatedDate.toDateString());
// for dd mm yyyy it is like months starts from the the 1


//timestamps used when the poles are there who gave the ans fatest for that purpose

let myTimeStamp = Date.now()

let myCreatedDate = new Date("01-13-2023")
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//want  to convert in sec
//console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

newDate.toLocaleString("default",
{
    weekday:"long",
    
})