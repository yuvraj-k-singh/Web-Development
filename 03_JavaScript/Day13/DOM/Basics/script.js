alert("Types of Element Selector...");

//1. Get element using id
let h1 = document.getElementById("heading1");
console.log(`1. Select using ID: `);
console.log(h1);

//2. Get element using class Name
let para = document.getElementsByClassName("para");
console.log(`\n2. Select using Class Name: `);
console.log(para);

//3. Get element using tagName
let list = document.getElementsByTagName("li");
console.log(`\n3. Select using Tag Name: `);
console.log(list);

//4. Get element using query selector
let li1 = document.querySelector(".item");
console.log(`\n4. Select using query selector: `);
console.log(li1);

//4. Get element using query selector all
let li2 = document.querySelectorAll(".item");
console.log(`\n5. Select using query selector All: `);
console.log(li2);