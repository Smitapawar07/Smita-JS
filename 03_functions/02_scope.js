/*why the var is not used now and why mostly used the let const so here the scope comes in pic when i am defining the a b c var with by using 3 way its not giving any problem in simple code but when i am trying to put them in the { } then thier work should be only for that {} but with the var its not happen properly lets see in the example that i am giving here  */


let a =10
const b = 7
var c = 8

// console.log(a);
// console.log(b);
// console.log(c);


//2nd way {}

if(true)
{
let a2 =20
const b2 = 30
var c2 = 40
}

//console.log(a2);//ReferenceError: a2 is not defined
//console.log(b2);//ReferenceError: b2 is not defined
//console.log(c2);  //op 40 
//so here is the pb the var var also decalre in the {} scope it cant be work outside the scope but its returning the 40 so 
//here is the concept about block scope thats why we dont use the var



var c3=687
let a3=67
const b3=68
if(true)
{
let a3 =20
const b3 = 30
var c3 = 40
}
// console.log(a3);
// console.log(b3);
// console.log(c3);

//so here the scope types comes: global scope and block scope
//what we return in the if that is known as block sopce
//outside the if it is called the global scope



let a4=67
const b4=68
if(true)
{
let a4 =20
const b4 = 30
//console.log("INNER a4:" , a4);
}
//console.log("OUTTER a4:",a4);
//console.log(b3);


//op of above code is INNER a4: 20   OUTTER a4: 67




function one()
{
    const username="smita"
    function two(){
        const website="drtf"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()


//okay here is the concept where we can say that elder can not take the ice cream from the youngers but in vice versa youngers can take the ice cream from the elders
//here we defined the one function n 2nd one inside the 1st function so the inner fun can have the outer functionalities but outer cant have the inner functionalities thats the point of scope