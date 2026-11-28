let student1 = {
    name: "Yuvraj",
    branch: "CSE",
    college: "IIST",
    greet: function(){
        console.log(`Hello from ${name}!`);
    }
};

let student2 = {
    name: "Pari",
};

console.log(`Student1 Object: `);
console.log(student1);

//Here student 2 doesn't contain property like clg and branch and method

console.log(`\nBefore: `);
console.log(`Student2 Object: `);
console.log(student2);

student2.__proto__ = student1;

console.log(`\nAfter: `);
console.log(`Student2 Object: `);
console.log(`branch: ${student2.branch}`);