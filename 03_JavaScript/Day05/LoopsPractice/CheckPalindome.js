let n = 1511, temp = n;

let rev = 0;
while(n!=0){
    rev = rev*10 + n%10;
    n = Math.trunc(n/10);
}

if(temp === rev) console.log("Palindrome Number");
else console.log("Not Palindrome Number");