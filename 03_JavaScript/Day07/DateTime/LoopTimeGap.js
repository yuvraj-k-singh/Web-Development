let arr = [10,20,20,20,37,4828,49,45,6,7,4,2,34,657,45,8,55,8];

let startTime = performance.now();
for(let x of arr){}
let endTime = performance.now();

console.log(`Total Time Taken By Loop to execute: ${(endTime-startTime).toFixed(5)}`);