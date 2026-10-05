console.log("For In Loop Values: ");

let student = {
    name: "Yuvraj",
    sec: "CS-5",
    E_No: "0818CS241389",
    SGPA: "8.24"
};

for(let key in student){
    console.log(`${key} => ${student[key]}`);
}
