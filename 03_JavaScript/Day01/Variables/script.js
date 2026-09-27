/* let keyword ->

1. value can change.
2. can be declare only.
3. cannot redeclare variable with same name.
4. block scope variable.
*/

let age = 5;
console.log("Before updating age: "+age);
age = 10;
console.log("After updating age: "+age);
let x;
console.log("Declare x value: "+x)

console.log();

/* const keyword ->

1. value cannot be change.
2. cannot declare only, need to intialize.
3. cannot redeclare again.
4. block scope variable.
*/

const collegeName = "IIST";
console.log("College name: "+collegeName);

console.log();

/* var keyword ->

1. value can be change.
2. allow to redeclare variable with same name.
3. can be declare only.
4. global scope variable.
*/

var fees = 1000;
console.log("Before redeclare College Fees: "+fees);
var fees = 2000;
console.log("After redeclare College Fees: "+fees);
fees = 5000;
console.log("After updating college Fees: "+fees);
var dept;
console.log("Declare dept value: "+dept);