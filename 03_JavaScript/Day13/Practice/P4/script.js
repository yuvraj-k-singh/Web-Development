let h1 = document.querySelector("h1");
console.log(`h1 text: ${h1.textContent}`);

let p = document.querySelectorAll("p");

for(let x of p){
    x.style.color = "green";
    x.style.fontWeight = "700";
}