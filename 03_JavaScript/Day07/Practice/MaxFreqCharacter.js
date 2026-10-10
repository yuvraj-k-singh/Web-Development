let str = "banana";
let max = Number.MIN_SAFE_INTEGER;
let n = str.length;
let ans = "";

for(let i=0; i<n; i++){
    let cnt = 0;
    for(let j=0; j<n; j++){
        if(str[i] == str[j]){
            cnt++;
        }
    }
    if(max < cnt){
        max = cnt;
        ans = str.charAt(i);
    }
}

console.log(`Max Frequency Character: ${ans} and Frequency is ${max}`);