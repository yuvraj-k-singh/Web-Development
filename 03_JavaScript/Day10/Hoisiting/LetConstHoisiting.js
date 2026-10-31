//console.log(a); //Reference error

let a = 15;
const b = 5;

console.log(a,b); //15,5

const add = function(a,b){
    //console.log(c);  //ReferenceError
    const c = 10;
    console.log(c);  //10
    return a+b;
}

console.log(add(a,b));  //20