//inshort function means we write the code of 10 -15 line of code and put in the package and accses it and make it multiple copies

function sayMyName(){
    //console.log("gh");
    //console.log("ds");
}


//sayMyName// this is known as reference
//sayMyName()//it is known as execution


// function addTwoNum(n1,n2)//when we create fun's def then that values known as parameters
//    {

//     console.log(n1+n2);

// }
// const result =addTwoNum(3,3)//this call values is known as arguments
// console.log(result);//op undefined



//when we trying to save that 6 in the var and try to print it it will give us undefined value so there is the concept of "return"



//here is the 2nd way to declare the function


function addTwoNum(n1,n2)
 {
  let result=n1+n2
  //console.log("fg");//it will print
  return result 
  console.log("gdc");// after the return statement not any single console will work its unreachable code
}
const result =addTwoNum(3,3)
//console.log("result:",result);

//another way

function addTwoNum2(n3,n4)
 {
 return n3+n4
  }
const result2 =addTwoNum(3,88)
//console.log("result:",result2);



function loginUser(username) {
  if(!username)  //username === undefined it is old way by using ! we can get same op
  {
    //console.log("plz enter a username");
    return
  }
    return `${username}just logged in`
    
}
//console.log(loginUser());



//when we pass the value in parameter

function loginUser2(username2="fam ") {
  if(!username2)    {
  //  console.log("plz enter a username");
    return
  }
    return `${username2}just logged in`
}
//console.log(loginUser2()); //and if we pass the argumnet value here then it will override it 



//

function calculateCartPrice(...n1){
return n1
}
//console.log(calculateCartPrice(200,90,2223));//if want to all three but we cant do like this so for this we can use rest operator

//rest and spread operator as per thier use


function calculateCartPrice2(val1,val2,...num1){
  return num1
}
//console.log(calculateCartPrice2(200 ,323,32,222223))//here only print is 32 222223 cause 1st two values are store in the val1 n val2




const user={
  username1:"dc",
  price:2333
}
function handleObj(anyobj) {
console.log(`username is ${anyobj.username1} and ${anyobj.price} is price`);  
}
//handleObj(user)//we can pass obj here also it will override now
handleObj({
  username1:"gvbh",
  price:678
})//op username is gvbh and 678 is price



const myNewArr=[23,23,12,123,23]
function return2ndval(getArr){
  return getArr[3]
}
//console.log(return2ndval(myNewArr));
console.log(return2ndval([23,23,56,5678,56]));