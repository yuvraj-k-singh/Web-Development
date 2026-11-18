console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");