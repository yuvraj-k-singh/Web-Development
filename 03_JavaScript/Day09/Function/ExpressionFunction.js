let add = function(a,b){
    return a+b;
}

console.log(`Sum: ${add(5,10)}`);

let multiply = function(a=1,b=1){
    return a*b;
}

console.log(`Multiply: ${multiply(5,2)}`);
console.log(`Multiply: ${multiply()}`);