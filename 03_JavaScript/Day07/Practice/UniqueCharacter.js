let str = "aabbcdd";
let n = str.length;

for(let i=0; i<n; i++){
    let cnt = 0;
    for(let j=0; j<n; j++){
        if(str[i] == str[j]){
            cnt++;
        }
    }
    if(cnt == 1){
        console.log(`Unique character is: ${str[i]}`);
    }
}