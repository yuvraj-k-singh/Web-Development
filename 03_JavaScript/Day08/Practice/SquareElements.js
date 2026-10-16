let arr = [10,5,1,3,5,4,2,0];
let brr = new Array(arr.length);

for(let i=0; i<arr.length; i++){
    brr[i] = arr[i]*arr[i];
}

console.log(`Original Array: ${arr}`);
console.log(`New Array: ${brr}`);