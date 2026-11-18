console.log("Start");

setTimeout(() => {
    console.log("Timer 1");

    Promise.resolve().then(() => {
        console.log("Promise 1");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("Promise 2");

    setTimeout(() => {
        console.log("Timer 2");
    }, 0);
});

console.log("End");