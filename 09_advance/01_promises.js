//we are learning about the 
//Q and BlueBird we can use this libraries 
// bulebird vs async and wait
//but now we dont need this libraries
//here we give the callback here the function is having two parts resolve, reject
//resolve have conn with the .then


const promiseOne = new Promise(function(resolve,reject){
    //do an async task , DB calls , cryptography,network
setTimeout(function(){
    console.log('async task complete');
    resolve();
},1000)
}) 
promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log('async 2 resolved ');
})

const promiseThree = new Promise(function(resolve,reject){
setTimeout(function(){
resolve({username : "chai", email: "chai@ex.com"});
},1000)
})
promiseThree.then(function(user){
    console.log(user);

})
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:'smita', pass: '1234'})
        }else{
            reject('error something went wrong')
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user);
    return user.username

})
.then((username) => {
console.log(username);
})
.catch(function(error){
    console.log(error);
})  
.finally(() => {
    console.log("promise resolved");
})

 const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:'tushar', pass: '123'})
        }else{
            reject('error something went wrong')
        }
    },1000)
 });
//as per then there will be async and await it is used in db most it will some issue in the catch handling 

async function consumePomiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }

}
consumePomiseFive()

// async function getAllusers(){
// try {
//     const response= await fetch('https://jsonplaceholder.typecode.com/users')
// const data=await response.json()
// console.log(data);
// } catch (error) {
//     console.log("e:" ,error);
// }
// }
//getAllusers()

fetch('https://jsonplaceholder.typecode.com/users')
.then((response) =>{
return response.json()
})
.then((data) =>{
    console.log(data);

})
.catch((error) => {console.log(error);})