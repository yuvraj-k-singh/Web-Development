let arr = [10,20,30,40,50];
let str = ["aman", "suman", "pari", "mohit", "yuvraj"];

arr.sort((a,b) => a-b); //ascending
str.sort((a,b) => b.localeCompare(a)); //descending

console.log(`\n1. Ascending sorting: ${arr}`);
console.log(`\n2. Decending sorting: ${str}`);