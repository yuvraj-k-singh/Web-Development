// //return json string from server
// const response = await fetch('https://api.github.com/users');

// //return js object
// const data = await response.json();
// console.log(data);

async function github() {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    console.log(data);
}

console.log("First World!");
github();
console.log("Last World!");