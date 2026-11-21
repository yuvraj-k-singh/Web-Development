let user = {
    name: "Yuvraj",
    age: 21,
    location: "Indore",
    gf: undefined,
};

console.log(user);
console.log(typeof user);
console.log();

//Convert to JSON
const jsonFormat = JSON.stringify(user);
console.log(jsonFormat);
console.log(typeof jsonFormat);