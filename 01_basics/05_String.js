//we can denote string by "",''


// const name ="Smita"
// const repocount =" :2"
// its outdated version to write the string concatenation
//console.log(name + repocount+ " value");

//back ticks it is known as string interpolation 
//console.log(`hi my name is ${name} and my repo count is ${repocount}`);
//op is hi my name is Smita and my repo count is  :2

//another way
//const gameName =new String('hu-iii')
// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));

//slice : gives us specific word
// const anotherString =gameName.slice(-8,4)
// console.log(anotherString);


//trim :it will remove the extra spaces from the passwords or any kind of word
//trimend and trimstart

const newStringOne ="   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());
//replace : if there is the URL it contain the value ex if someone created url like "https://smita.com/smita pawar" so browser doesnt understand the spaces 

const url ="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20", "-" ))

console.log(url.includes('dxfcgv')); 