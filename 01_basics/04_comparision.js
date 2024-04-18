//for good conding we cant compare the diff datatype because
console.log("2" > 1);

//this may be get some wrong results
console.log(null > 0);
console.log(null == 0);
//here value conversion problem is here
console.log(null >= 0);

console.log(undefined == 0);

//in comparision and equality is works differently
//=== it will use the value and datatype aslo
console.log("2" === 1);