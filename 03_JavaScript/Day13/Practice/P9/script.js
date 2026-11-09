let student = {
    name: "Yuvraj",
    course: "B.Tech CSE",
    college: "IIST Indore",
    year: 2
};

let div = document.createElement("div");
let h1 = document.createElement("h1");
h1.textContent = "Student Information";
let body = document.querySelector("body");

body.append(div);
div.append(h1);
h1.style.textAlign = "center";

let fragment = new DocumentFragment();
for(let key in student){
    let p = document.createElement("p");
    p.textContent = `${key} : ${student[key]}`;
    fragment.append(p);
}

div.append(fragment);