let section = document.querySelector(".home");

//1. Attribute
console.log(`1. Attribute: `);
console.log(`Get Attribute: ${section.getAttribute("class")}`);

section.setAttribute("id", "home-id");
section.setAttribute("name", "home-section");
console.log(`Set Attribute (id): ${section.getAttribute("id")}`);
console.log(`Set Attribute (name): ${section.getAttribute("name")}`);

//2. Create element
console.log(`\n2. Create Element: `);
let p = document.createElement("p");
p.textContent = "This para one!"
p.id = "p";
p.classList.add("para");
p.classList.add("p");
p.classList.remove("p");

let h1 = document.createElement("h1");
h1.textContent = "Heading 1";
h1.id = "h1";

let btn = document.createElement("button");
btn.textContent = "Click Me!";
btn.id = "btn";

let ul = document.createElement("ul");
ul.id = "ul";

let li1 = document.createElement("li");
li1.textContent = "DSA";
li1.id = "li1";

let li2 = document.createElement("li");
li2.textContent = "OOPM";
li2.id = "li2";

let li3 = document.createElement("li");
li3.textContent = "DBMS";
li3.id = "li3";

let h2 = document.createElement("h2");
h2.textContent = "Heading 2";
h2.id = "h2";

let h3 = document.createElement("h3");
h3.textContent = "Heading 3";
h3.id = "h3";

console.log(`P element: `);
console.log(p);

//3. Insert
section.append(p);
section.append(btn)    //insert node at last (inside)
section.prepend(h1);  // Insert node at start (inside)
section.append(ul);
ul.append(li1);
ul.append(li2);
ul.append(li3);
ul.before(h2);
ul.after(h3);

//4. Delete
p.remove();

//5. Style
h1.style.color = "blue";

btn.style.padding = "12px 45px";
btn.style.color = "white";
btn.style.fontSize = "18px";
btn.style.border = "solid 2px green";
btn.style.borderRadius = "15px";
btn.style.backgroundColor = "grey";

h2.style.color = "brown";
h2.style.fontSize = "25px";

ul.style.color = "purple";
ul.style.fontWeight = "650";
ul.style.fontSize = "20px";

h3.style.fontSize = "21px";
h3.style.color = "orange";