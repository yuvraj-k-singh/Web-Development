let arr = [10,20,30,20,65,20];

console.log(`Arr Elements: ${arr}`);

//Set declaration and initialization
let set = new Set(arr);

console.log(`\nSet Elements: `);
// console.log(set);

//Iteration over set
for(let x of set){
    console.log(x);
}