let user = `{
    "name": "Yuvraj",
    "age": 21,
    "Location": "Indore"
}`;

console.log(user);
console.log(typeof user);
console.log();


//Convert to JS Object
let jsObject = JSON.parse(user);
console.log(jsObject);
console.log(typeof jsObject);