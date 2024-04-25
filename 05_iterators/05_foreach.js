// const coding=["js","jaava","css","python","ruby"]
//in callback fun there is no name of func

// coding.forEach(  function (item) {
//     console.log(item);
// } )



//by arrow fun
// coding.forEach( (val)=>{
//     console.log(val);
// } )


// function printMe(value) {
//     console.log(value);
    
// }
// coding.forEach(printMe)



// coding.forEach(  (item,index , arr)=>{
//     console.log(item,index,arr);
    
// })


//in array we are declaring the obj

const myCoding=[
    {
        langName:"js",
        langFile:"jsss"
    },
    {
        langName:"cpp",
        langFile:"c++"
    },
    {
        langName:"java",
        langFile:"javac"
    },
]
myCoding.forEach((item)=>{
    //console.log(item.langName);
})


//in cart we can use this


//-------------------------------------------------------------------------------------


// const coding=["js","jaava","css","python","ruby"]
// const values=coding.forEach( (item) =>{
//     console.log(item);
// })
//foeach doesnt return anything


//filter
/*The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function*/

const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNum = myNum.filter( (num)=>{
// return num > 4
// })


// const newNum =[]

// myNum.forEach( (num)=>
// {
//     if(num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum);


//this is the ex for fetching the data from the database 


const books=[
    {
        title:'b1', genre:"funny", publish:1987,edition:2001},
    {
        title:'b2', genre:"non-funny", publish:1985,edition:2011},
    {
        title:'b3', genre:"funny", publish:1983,edition:2009},
    {
        title:'b4', genre:"science", publish:1957,edition:2002},
    {
        title:'b5', genre:"non-funny", publish:1927,edition:2004},
    {
        title:'b6', genre:"history", publish:1999,edition:2003},
    {
        title:'b7', genre:"funny", publish:1980,edition:2601}

];
const userbook=books.filter( (bk)=> bk.genre==='funny')

const userbook1=books.filter( (bk)=>{ return bk.publish>=1880})// so here i declare the scope for that i need to give the return keyword otherwise i will get err
const userbook3=books.filter( (bk)=> {
    return bk.publish >=1995 && bk.genre ==="history"
})

// console.log(userbook);
// console.log(userbook1);
console.log(userbook3);