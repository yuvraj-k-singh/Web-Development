let arr = [1,2,3,4,5,6,7,8,9];
console.log(`Original Array: ${arr}`);

//1. Add
arr.splice(2,0,101,102);
console.log(`\n1. Add Method: ${arr}`);

//2. Remove
arr.splice(2,2);
console.log(`\n2. Remove Method: ${arr}`);

//3. Replace
arr.splice(1,1,112);
console.log(`\n3. Replace Method: ${arr}`);