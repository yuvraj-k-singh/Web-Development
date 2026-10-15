let arr = [10,20,48,57,48,49];

//for Loop
console.log("Value of arr using For Loop: ");
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
console.log();

//for Of Loop 
console.log("Value of arr using For Of Loop: ");
for(let x of arr){
    console.log(x);
}
console.log();

//For Each Loop
console.log("Value of arr using For each Loop: ");
arr.forEach((val, index) => {
    console.log(val, index);
});