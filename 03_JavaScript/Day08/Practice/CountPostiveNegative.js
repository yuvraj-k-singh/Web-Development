let arr = [10,5,1,-4,-68,6,0];

let pos = 0, neg = 0;

for(let x of arr){
    if(x < 0) neg++;
    else pos++;
}

console.log(`Positive count: ${pos}`);
console.log(`Negative count: ${neg}`);