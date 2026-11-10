let button = document.querySelector("#btn");
let reset = document.querySelector("#reset");
let count = document.querySelector("#count");

let counter = 0;

button.addEventListener('click', ()=>{
    counter++;
    count.textContent = counter;
});

reset.addEventListener('click', ()=>{
    counter = 0;
    count.textContent = counter;
});