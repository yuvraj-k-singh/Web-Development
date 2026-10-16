let marks = [10,9,6,6,7,7,4,6,8,9,8,6];

let totalMarks = 0;

for(let x of marks){
    totalMarks += x;
}

let avgMarks = totalMarks/marks.length;
console.log(`Total Marks: ${totalMarks}, and total Students: ${marks.length}`);
console.log(`Average marks: ${avgMarks.toFixed(3)}`);