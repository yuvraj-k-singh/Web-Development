let arr = [10,20,5,5,2,6];

let max = Number.MIN_SAFE_INTEGER;

for(let x of arr){
    max = Math.max(max, x);
}

console.log(`Maximum element: ${max}`);