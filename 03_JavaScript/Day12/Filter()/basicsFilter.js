let nums = [10,5,6,8,69,4,7,3,2,1];

console.log(`Original Array: `);
console.log(nums);

let even = nums.filter((x) => {
    return x%2 === 0;
});

console.log(`\nEven Elements: ${even}`);

let odd = nums.filter((x) => {
    return x%2 !== 0;
});

console.log(`\nOdd Elements: ${odd}`);

let greatThan5 = nums.filter((x) => {
    return x > 5;
});

console.log(`\nGreater than 5 Elements: ${greatThan5}`);