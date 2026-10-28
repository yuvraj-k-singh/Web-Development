let arr = [10, 20.56, "Yuvraj", true];
let student = {
    name: "Yuvraj",
    age: 21,
    college: "IIST"
};

console.log(`1. For loop: `);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

console.log(`\n2. While loop: `);
let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

console.log(`\n3. Do While loop: `);
let k = 0;
do{
    console.log(arr[k]);
    k++;
}while(k<arr.length);


console.log(`\n4. For of loop: `);
for(let x of arr){
    console.log(x);
}

console.log(`\n5. For in loop: `);
for(let key in student){
    console.log(`Key: ${key} and value: ${student[key]}`);
}

console.log(`\n6. For each loop: `);
arr.forEach((value, index) => {
    console.log(`value: ${value} and index: ${index}`);
});