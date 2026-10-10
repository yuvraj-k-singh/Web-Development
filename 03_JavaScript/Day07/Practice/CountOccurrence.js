let str = "banaana";
let ch = 'a'
let count = 0;
let n = str.length;

for(let i=0; i<n; i++){
    if(str[i] === ch){
        count++;
    }
}

console.log(`${ch} has occurence: ${count}`);