let arr = [10,5,1,3,5,4,2,0];

let odd = 0, even = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        even++;
    }else odd++;
}

console.log(`Even count: ${even}`);
console.log(`Odd count: ${odd}`);