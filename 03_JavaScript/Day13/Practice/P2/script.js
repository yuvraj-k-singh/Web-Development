let h1 = document.createElement("h1");
h1.textContent = "Welcome to DOM Manipulation";
h1.style.color = "blue";

let body = document.querySelector("body");
body.append(h1);