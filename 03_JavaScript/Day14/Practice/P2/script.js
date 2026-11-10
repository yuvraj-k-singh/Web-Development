let input = document.querySelector("#text");
let h2 = document.querySelector("#h2");

input.addEventListener('input', (e)=>{
    h2.textContent = e.target.value;
});