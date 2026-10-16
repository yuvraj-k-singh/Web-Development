let arr = [5,6,5,50,4,2,56,5,5,456,55,4];
let result = [];

for(let x of arr){
    if(x > 10){
        result.push(x);
    }
}

console.log(`Element greater than 10: ${result}`);