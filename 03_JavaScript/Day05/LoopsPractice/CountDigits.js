let n = 3772;
let temp = n;

let count = 0;
while(n!=0){
    count++;
    n = Math.trunc(n/10);
}
console.log(`Total digits in ${temp}: ${count}`);
