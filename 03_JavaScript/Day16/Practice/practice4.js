console.log("Start");

Promise.resolve().then(() => console.log("Promise"));

setTimeout(() => console.log("Timer"), 0);

console.log("End");