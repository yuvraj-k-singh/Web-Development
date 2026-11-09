let ul = document.createElement("ul");
ul.id = "list";

let fragment = new DocumentFragment();
let languages = ["Java", "JavaScript", "Python", "C++", "PHP"];

for(let x of languages){
    let li = document.createElement("li");
    li.textContent = x;
    fragment.append(li);
}

let body = document.querySelector("body");
body.append(ul);
ul.append(fragment);