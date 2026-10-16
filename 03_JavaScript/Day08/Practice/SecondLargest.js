let arr = [10,20,5,5,2,6];

let max = Number.MIN_SAFE_INTEGER;
let sMax = Number.MIN_SAFE_INTEGER;

for(let x of arr){
    if(x > max){
        sMax = max;
        max = x;
    }else if(x!=max && x > sMax){
        sMax = x;
    }
}

console.log(`Second Maximum element: ${sMax}`);