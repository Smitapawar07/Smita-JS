/*initially i am facing the problem with my new folder so i did chatgbt and got the result
@Smitapawar07 ➜ /workspaces/smita-JS (main) $ ls -l 02_basics/01_array.js
-rw-rw-rw- 1 node node 30 Apr 18 13:06 02_basics/01_array.js
@Smitapawar07 ➜ /workspaces/smita-JS (main) $ chmod +x 02_basics/01_array.js
@Smitapawar07 ➜ /workspaces/smita-JS (main) $ node 02_basics/01_array.js
1
@Smitapawar07 ➜ /workspaces/smita-JS (main) $ 
 */


// const num =1
// console.log(num);



//------------array

const myArr = [0,1,2,3,4]
// const myHeros = ["sd","ds"]
// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);

// //array methods

// myArr.push(9)
// console.log(myArr);
// myArr.pop()//remove last ele
// console.log(myArr);

//myArr.unshift(3)//---it will add ele at 1st
// console.log(myArr);
// myArr.shift()
// console.log(myArr);//---it will remove the starting ele



// console.log(myArr.includes(4));//it will come boolean

// console.log(myArr.indexOf(7));//it will 

// const newArr = myArr.join()//adds all the of arr into astring
// const newArr3 = myArr.join//here i forgot the parenthesis so got the type is function

// console.log(typeof newArr3);
// console.log(myArr);
// console.log(typeof newArr);



//slice , splice

console.log("a",myArr);

const myn1 =myArr.slice(1,3)//here it will return the specific portion of the arr
console.log(myn1);
console.log("b",myArr);

const myn2 = myArr.splice(1,3)//it will remove 1 2 3 and return 0 4
console.log("c",myArr);
console.log(myn2);
/*
a [ 0, 1, 2, 3, 4 ]
[ 1, 2 ]

b [ 0, 1, 2, 3, 4 ]

c [ 0, 4 ]
[ 1, 2, 3 ]*/


