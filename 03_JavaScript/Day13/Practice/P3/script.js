let div = document.createElement("div");
div.id = "container";

let body = document.querySelector("body");
body.append(div);

let fragment = new DocumentFragment();

for(let i=1; i<=5; i++){
    let p = document.createElement("p");
    p.textContent = `This is paragraph ${i}`;
    fragment.append(p);
}

div.append(fragment);