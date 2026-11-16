const form = document.querySelector("form");
const result = document.querySelector(".result-container");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const work = document.querySelector("#work").value.trim();

    const child = document.createElement("div");
    const remove = document.createElement("button");

    remove.classList.add("remove-btn");
    remove.textContent = "Remove";

    child.classList.add("child");
    child.textContent = work;

    child.append(remove);

    remove.addEventListener("click", () => {
        child.remove();
    });

    result.append(child);
    result.style.visibility = "visible";

    form.reset();
});