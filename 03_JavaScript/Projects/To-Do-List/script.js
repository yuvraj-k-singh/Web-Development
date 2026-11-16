const form = document.querySelector("form");
const result = document.querySelector(".result-container");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const work = document.querySelector("#work").value.trim();

    const child = document.createElement("div");
    const text = document.createElement("h3");
    const remove = document.createElement("button");
    const done = document.createElement("button");

    text.textContent = work;

    done.classList.add("done-btn");
    done.textContent = "Done!";

    remove.classList.add("remove-btn");
    remove.textContent = "Remove";

    child.classList.add("child");

    child.append(text);
    child.append(done);
    child.append(remove);

    done.addEventListener("click", () => {
        text.style.textDecorationLine = "line-through";
    });

    remove.addEventListener("click", () => {
        child.remove();
    });

    result.append(child);
    form.reset();
});