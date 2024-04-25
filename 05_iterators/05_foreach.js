const coding=["js","jaava","css","python","ruby"]
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
    console.log(item.langName);
})


//in cart we can use this