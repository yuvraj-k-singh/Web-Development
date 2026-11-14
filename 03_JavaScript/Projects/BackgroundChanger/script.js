let container = document.querySelector(".home-container");
let body = document.querySelector("body");

container.addEventListener("click", (e)=>{
    body.style.backgroundColor = e.target.id;
})