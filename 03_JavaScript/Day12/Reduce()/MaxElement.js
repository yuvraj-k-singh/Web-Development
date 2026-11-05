let arr = [10,20,30,96,50,56];

let max = arr.reduce((acc, x) =>{
    return Math.max(acc, x);
}, Number.MIN_SAFE_INTEGER);

console.log(`Maximum value: ${max}`);