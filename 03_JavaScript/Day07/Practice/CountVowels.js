let str = "javascript";
let count = 0;

for(let ch of str){
    if(ch === 'A' || ch === 'E' || ch === 'I' || ch === 'O' || ch === 'U' || ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u'){
        count++;
    }
}

console.log(`Total vowels in ${str} is: ${count}`);