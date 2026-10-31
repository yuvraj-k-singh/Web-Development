//no parameter
const greet = () => console.log("No Parameter: Hello world!");
greet();

//one parameter
const square = n => n*n;
console.log(`\nOne Parameter Square: ${square(5)}`);

//two parameter
const add = (a,b) => a+b;
console.log(`\nTwo Parameter Sum: ${add(5,10)}`);

//multiple parameter
const sum = (...num) => {
    let sum = 0;
    for(let x of num) sum += x;
    return sum;
}
console.log(`\nMultiple Parameter Sum: ${sum(5,6,8,6,5)}`);