const sym = Symbol("ID");

let user = {
    name: "Pari",
    age: 20,
    city: "Indore",
    gender: "Female",
    [sym]: "VALUE"
};

console.log(user);