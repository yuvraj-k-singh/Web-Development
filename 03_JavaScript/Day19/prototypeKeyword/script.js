let student1 = {
    name: "Yuvraj",
};

let student2 = {
    name: "Yuvraj"
};

//Here both student share same property like branch and college, instead of it we can set
//property to object and access to all new objects...

Object.prototype.branch = "CSE";
Object.prototype.college = "IIST";
Object.prototype.greet = function(){
    console.log(`Hello from ${this.name}!`);
}

console.log(`Student1 College: ${student1.college}`);
console.log(`Student2 Branch: ${student2.branch}`);
console.log(`Student1 Greet method: `);
student1.greet();