let div = document.querySelector("#container");
let p1 = document.querySelector("#para");

let p2 = p1.cloneNode(true);
p2.textContent = "Learn DOM";
div.append(p2);