// const userEmail = "sp@gmail.com"
// if(userEmail){
//     console.log("got user email");
// }else {
//     console.log("dont have email");
// }


//falsy values
//false, 0, -0, BigInt 0n,"", null , undefined , NaN

//truthy values
//true, "0" ---its truthy value ,'false', " "---space,[],{},function(){}---empty fun
//


// const emptyObj={}
//     if (Object.keys(emptyObj).length === 0) {
//         console.log("obj is empty");
//     }


    //Nullish Coalescing Operator (??): null undefined
    let val1;
    //val1 = 21 ?? 10
    //val1= null ?? 2
    //val1 = undefined ?? 1234

    val1 = null ?? 10 ?? 20

    console.log(val1);


    //terniary operator
   // condition ? true:false
   

   const iceTeaPricec = 1009
   iceTeaPricec<=80 ? console.log("less than 80"):console.log("more than 80");