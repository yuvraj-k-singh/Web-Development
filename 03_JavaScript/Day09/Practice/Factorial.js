let num = 5;

const ans = num => {
    let fact = 1;
    for(let i=1; i<=num; i++){
        fact *= i;
    }
    return fact;
}

console.log(`Factorial of ${num} is ${ans(num)}`);