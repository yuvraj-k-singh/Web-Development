let arr = [1,2,4,5,67,9,8,6];

console.log(`Original Array: ${arr}`);

//1. Push
arr.push(10,20,30);
console.log(`\n1. Push Method: ${arr}`);

//2. Pop
arr.pop();
arr.pop();
console.log(`\n2. Pop Method: ${arr}`);

//3. Unshift
arr.unshift(true);
console.log(`\n3. Unshift Method: ${arr}`);

//4. shift
arr.shift();
console.log(`\n4. Shift Method: ${arr}`);