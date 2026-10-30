const student = {
    name: "Yuvraj Kumar Singh",
    age: 21,
    branch: "CSE",
    email: "Yuvraj@gmail.com",
    isBack: false
};

console.log(`Student Data: `);
console.log(student);

//1. Create
console.log(`\n1. Create: `);
student.city = "Indore";
student.sgpa = 8.29;
console.log(student);

//2. Read
console.log(`\n2. Read: `);
console.log(`Student name: ${student.name}`);
console.log(`Student branch: ${student["branch"]}`);

//3. Update
console.log(`\n3. Update: `);
console.log(`Previous Student City: ${student.city}`);
student.city = "Patna";
console.log(`\nNew Student City: ${student.city}`);
console.log(student);

//4. Delete
console.log(`\n4. Delete: `);
console.log(`Previous Student Data: `);
console.log(student);
delete student.isBack;
console.log(`\nNew Student Data: `);
console.log(student);
