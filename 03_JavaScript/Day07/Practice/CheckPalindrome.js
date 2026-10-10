let str = "naman";
let flag = true;

let i = 0, j = str.length-1;

while(i<j){
    if(str[i] !== str[j]){
        flag = false;
    }
    i++;
    j--;
}

if(flag) console.log("Yes Palindrome!");
else console.log("Not Palindrome!");