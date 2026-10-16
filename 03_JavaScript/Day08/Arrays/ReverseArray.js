let arr = [10,20,30,40,50];
let brr = [...arr];

//1. Inbuilt Method
arr.reverse();
console.log(`1. Inbuilt Method: ${arr}`);


//2. User defined Method
let i=0, j=brr.length-1;

while(i<=j){
    let temp = brr[i];
    brr[i] = brr[j];
    brr[j] = temp;
    i++;
    j--;
}
console.log(`\n2. UserDefined Method: ${brr}`);