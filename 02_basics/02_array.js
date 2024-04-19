const marvel =["thor","captain","msd"]
const anime =["naruto", "pikachu","ninja"]

// marvel.push(anime)
// console.log(marvel);//it will take that value as an subarray [ 'thor', 'captain', 'msd', [ 'naruto', 'pikachu', 'ninja' ] ]


//we can use also concate
// const allhero = marvel.concat(anime)
// console.log(allhero);     //(its giving now)but before it suppose to give the op like above but dont konw what happen it is giving only 1st arr
//here is the syntax error we need to store new arr: [ 'thor', 'captain', 'msd', 'naruto', 'pikachu', 'ninja' ]

//spread operator
const all_new_heros =[...marvel, ...anime]
console.log(all_new_heros);


//HERE if we declare or got the arr like below then we can that all arr in one single arr

const anarr1 = [1 ,3,3,3,[1,3,9],9,6,[23,3,[3,1]]]
const anarr2 = anarr1.flat(Infinity)//we can give here the depth or we want resolve all depth then use infinity
console.log(anarr2);


//when we select the data from the various places then its not in one format so we can use this
console.log(Array.isArray("RFTYG"))
console.log(Array.from("RFTYG"))
console.log(Array.from({name:"dfg"}))
//it cant convert so we need to specify the do for keys for values otherwise it will the empty array

let score1 =100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));