console.log("Synchronous: A");

setInterval(()=>{
    console.log("Asynchronous: B");
}, 2000);

setTimeout(()=>{
    console.log("Asynchronous: C");
}, 3000);

console.log("Synchronous: D");