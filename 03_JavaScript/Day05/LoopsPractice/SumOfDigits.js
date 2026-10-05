let n = -12;
let temp = n;

let sum = 0;
while(n!=0){
    sum += n % 10;
    n = Math.trunc(n/10);
}
console.log(`Total sum of ${temp} digits: ${sum}`);