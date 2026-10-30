//Declare and initialize 
let user = {
    name: "Yuvraj",
    age: 21,
    email: "Yuvraj@microsoft.com",
    "Account Number": "0818241389",
    isBank: true
};

//Print
console.log("User Object: ");
console.log(user);

//Access object properties
console.log("\nUser Properties Acess: ");
console.log("1. Dot Operator: ");
console.log(`User name: ${user.name}`);
console.log(`User name: ${user.age}`);

console.log("\n2. Bracket Notation: ");
console.log(`User email: ${user["email"]}`);
console.log(`User Acc Number: ${user["Account Number"]}`);
