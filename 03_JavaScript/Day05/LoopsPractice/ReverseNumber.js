let n = 12345, temp = n;
let rev = 0;

while(n!=0){
    rev = rev*10 + n%10;
    n = Math.trunc(n/10);
}
console.log(`Reverse of ${temp} is: ${rev}`);
