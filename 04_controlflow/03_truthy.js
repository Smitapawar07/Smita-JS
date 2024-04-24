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


const emptyObj={}
    if (Object.keys(emptyObj).length === 0) {
        console.log("obj is empty");
    }
