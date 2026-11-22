const p = new Promise((resolve, reject) => {
    resolve(5);
});

p.then(value => console.log(value));
console.log("Hello");