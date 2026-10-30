const user = {
    name: "Yuvraj",
    age: 21,
    gender: "Male",
    address: {
        city: "Indore",
        State: "M.P"
    }
};

//Spread Operator
console.log(`1. Spread Operator: `);

const user1 = {...user};

console.log(`User Before: `);
console.log(user);
console.log(`\nUser1 Before: `);
console.log(user1);

user1.name = "Pari";
user1.address.city = "Mumbai";

console.log(`\nUser After: `);
console.log(user);
console.log(`\nUser1 After: `);
console.log(user1);

//Structed Clone
console.log(`\n2. Structed Clone: `);

const user2 = structuredClone(user);


console.log(`User Before: `);
console.log(user);
console.log(`\nUser2 Before: `);
console.log(user2);

user2.name = "Anish";
user2.address.city = "Balia";

console.log(`\nUser After: `);
console.log(user);
console.log(`\nUser2 After: `);
console.log(user2);