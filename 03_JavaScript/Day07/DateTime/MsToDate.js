let now = Date.now();
console.log(`Current time in MilliSeconds: ${now}`);

let date = new Date(now);
console.log(`Current time: ${date.toLocaleDateString()}`)