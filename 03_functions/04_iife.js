//Immediately Invoked Function Expression (IIFE)

//it is a func if we write on file there is only db connection and if our file is run then databse connection should be establish immediate

//when our scope is global then our data will be get polluted  then we use the iife

(function myfun(){   //this is the named iife and the name is myfun
    console.log("DB Connected");
}
)();
//we need to put terminator there    // when we want to invoke the fun immediate then 

//()() 1st will declaration of func and 2nd is the execution

//sometimes there is problem because of the global scope pollution 
//so for removing that global scope var or declaration of polluted var we used the iife


//with arrow fun we can do this also

((name)=>{    //this is the unnamed the iife //we can give and declare the var also
    console.log(`DB conneted 2 ${name}`);
})("smita");


//if we want to write the multiple iife then we need to terminate previous iife with the semicolan