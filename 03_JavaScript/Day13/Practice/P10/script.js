let div = document.querySelector("#container");

console.log(`Before div length: ${div.children.length}`);

while (container.firstElementChild) {
    container.removeChild(container.firstElementChild);
}

console.log(`After div length: ${div.children.length}`);