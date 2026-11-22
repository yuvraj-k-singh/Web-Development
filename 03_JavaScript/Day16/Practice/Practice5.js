const p = new Promise((resolve, reject) => {
    console.log("Inside Promise");
    resolve(100);
});

console.log("After Promise");

p.then(value => console.log(value));