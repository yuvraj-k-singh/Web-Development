function add(...nums){
    let sum = 0;
    for(let x of nums){
        sum += x;
    }
    return sum;
}

console.log(`Sum: ${add()}`);
console.log(`Sum: ${add(5)}`);
console.log(`Sum: ${add(5,10,5,6,8,6)}`);
console.log(`Sum: ${add(0,5,69,8,6,55,22,5,6,88,99,6,5,44)}`);