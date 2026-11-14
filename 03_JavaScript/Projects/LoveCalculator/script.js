let form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const l1 = document.querySelector("#boyName").value.length;
    const l2 = document.querySelector("#girlName").value.length;

    let value = Math.floor(Math.random()*(100-45)+45);

    const result = document.querySelector("p");
    result.textContent = `${value} %`;

    form.reset();
})