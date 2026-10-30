const user = {
    name: "Yuvraj Kumar Singh",
    age: 21,
    city: "Indore"
};

//Old way
let userName = user.name;
let userAge = user.age;
console.log(`Old way: ${userName}, ${userAge}`);

//New Ways
let{name,age,city} = user;
console.log(`\nNew way: ${name}, ${age}, ${city}`);