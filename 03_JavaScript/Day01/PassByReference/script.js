let student1 = {
    name: "Yuvraj",
    eNo: "0818CS241389",
    sem: 5
};

console.log("Details of student 1 is: ")
console.log(student1);
console.log();

let student2 = student1;
student2.name = "Pari";
console.log("Details of student 2 is: ")
console.log(student2);
console.log();

console.log("After upadting student2, now student 1 is: ");
console.log(student1);