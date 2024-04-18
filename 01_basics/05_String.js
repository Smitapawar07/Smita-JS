//we can denote string by "",''


const name ="Smita"
const repocount =" :2"
// its outdated version to write the string concatenation
//console.log(name + repocount+ " value");

//back ticks it is known as string interpolation 
console.log(`hi my name is ${name} and my repo count is ${repocount}`);
//op is hi my name is Smita and my repo count is  :2

//another way
const gameName =new String('hu-iii')
// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

const anotherString =gameName.slice(-8,4)
console.log(anotherString);
//slice gives us
//trim 
//replace