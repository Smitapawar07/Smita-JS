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
    console.log("plz enter a username");
    return
  }
    return `${username}just logged in`
    
}
console.log(loginUser());





function loginUser2(username2="fam ") {
  if(!username2)    {
    console.log("plz enter a username");
    return
  }
    return `${username2}just logged in`
}
console.log(loginUser2()); //and if we pass the argumnet value here then it will override it 