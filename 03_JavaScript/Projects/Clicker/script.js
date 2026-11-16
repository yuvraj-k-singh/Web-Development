const body = document.querySelector("body");

body.addEventListener("click", (e)=>{
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.textContent = "pari";

    const color = ["red", "blue", "purple", "green", "grey", "orange"];

    circle.style.backgroundColor = `${color[Math.floor(Math.random()*6)]}`;
    circle.style.top = `${e.clientY}px`;
    circle.style.left = `${e.clientX}px`;

    body.append(circle);

    setTimeout(()=>{
        circle.remove();
    },5000)
});