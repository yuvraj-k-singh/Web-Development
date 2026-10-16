let prices = [250,645,300,900,50];
let off = 10;

console.log(`Prices before 10% Discount: ${prices}`);

for(let i=0; i<prices.length; i++){
    prices[i] = prices[i] - (prices[i] * (off / 100)); 
}

console.log(`Prices After 10% Discount: ${prices}`);