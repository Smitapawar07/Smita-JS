const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//callback fun h yeh
// const newNums=myNumbers.map( (num)=> {return num+10})
//chaining--->this is how we can do any no of chaining
const newNums = myNumbers
    .map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
//console.log(newNums);



//reduce

//----------->


const mynum=[1,2,3]
// const mytotal=mynum.reduce( (acc,currval)=>{
//     console.log(`acc : ${acc} n currval:${currval}`);
//     return acc+currval
// },0)



/*acc : 0 n currval:1
acc : 1 n currval:2
acc : 3 n currval:3
6 */


//diff way
const mytotal=mynum.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal);



const shoppingCart=[
    {
        itemname:"js course",
        price: 5678
    },
    {
        itemname:"cpp course",
        price: 567
    },
    {
        itemname:"dsa course",
        price: 56
    },
    {
        itemname:"Data science course",
        price: 56780
    },
];
const payment=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(payment);