//Create
let btn = document.createElement("button");
btn.id = "btn";
btn.textContent = "Click ME!";
btn.style.backgroundColor = "red";
btn.style.color = "white";

//Insert
let body = document.querySelector("body");
body.append(btn);