let arr = [10,5,10,5,2,6,5,8];
let result = [];

for(let i=0; i<arr.length; i++){
    if(!result.includes(arr[i])){
        result.push(arr[i]);
    }
}

console.log(`Remove duplicate elements: ${result}`);