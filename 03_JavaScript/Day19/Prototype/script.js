let arr = [10,20,30,40];

console.log(`Arr elements: ${arr}`);

console.log(`Arr Prototype Chain: `);
console.log(arr.__proto__);
console.log(`Array Prototype-> `);
console.log(Array.prototype);
console.log(arr.__proto__.__proto__);
console.log(`Object Prototype-> `);
console.log(Object.prototype);
console.log(arr.__proto__.__proto__.__proto__);


//Hence proved that array is type of Object
//arr -> Array.prototype -> Object.prototype -> Null