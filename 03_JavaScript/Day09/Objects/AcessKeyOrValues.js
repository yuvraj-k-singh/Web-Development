const student = {
    name: "Yuvraj Kumar Singh",
    age: 21,
    branch: "CSE",
    email: "Yuvraj@gmail.com"
};

console.log(`Student Data: `);
console.log(student);

//1. Access Keys only
let keys = Object.keys(student);
console.log(`\n1. Access Keys Only: ${Object.keys(student)}`);

//2. Access Values Only
let val = Object.values(student);
console.log(`\n2. Access Values Only: ${Object.values(student)}`);

//3. Access Keys and Values
console.log(`\n3. Access Key and Value: `);
console.log(Object.entries(student));