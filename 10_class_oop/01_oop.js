// const user = {
//     username :"smita",
//     loginCount: 8,
//     signedin : true,
//     getuserdetails :function() {
// console.log("got the user");        
//     }
// }
// console.log(user.username);
// console.log(user.getuserdetails());

function User(uname,logincount,islogin) 
{
    this.uname=uname;
    this.logincount=logincount; 
    this.islogin=islogin;
    return this

    this.greeting = function() {
        console.log("welcome ${this.username}" );
        
    }
}

//const uone=User("smita",5,true)
//console.log(uone);
//if here we take the utwo and give the values to the same user then it will override the uone thats very problematic so thats why we used the new keyword and consructor function
const uone=new User("smita",5,true)
const utwo =new User("dhbsj",6,false)
console.log(uone);
console.log(utwo);
//cause of new keyword it will called the constuctor function.