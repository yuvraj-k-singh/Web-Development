let arr = [10,20,30,20,65,20];

console.log(`Arr Elements: ${arr}`);

let nums = [...new Set(arr)];

console.log(`Nums Elements: ${nums}`);