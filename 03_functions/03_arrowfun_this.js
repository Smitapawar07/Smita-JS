const user ={
    username:"ghbj",
    price :678,
    welcome: function(){
        //console.log(`${this.username} ,welcome to website`);
    }

}
user.welcome()
//console.log(this);
//this keyword defines the current context

//when we print the this in the function then we got lot of values
// function one(){
//     console.log(this);
// }
// one()

// const chai=function(){
//     let name="smita"
//     console.log(this.name);
// }
// chai()//undefined


//this is how we can define the arrow fun ()=>{}
const chai=()=>{
    let name="smita"
    //console.log(this);
}
chai()


//()=>{} this is how we declare this
//we can store this into the var also give para     const addtwo=(n1,n2)=>{}


//this is one way to declare = explicit return
// const addtwo=(n1,n2)=>{
//     return n1+n2
// }

//implicit return remove parenthesis
//if we wrapp in the{} braces then we should add return but () then dont need to use return keyword
//const addtwo=(n1,n2)=> n1+n2
//const addtwo=(n1,n2)=> (n1+n2)

//for obj we write ()
const addtwo=(n1,n2)=>({name:"smita"})
console.log(addtwo(2,3));

// const myArr=[1,2,3,4,5]
// myArr.forEach(function(){})
// myArr.forEach(()=> {})
