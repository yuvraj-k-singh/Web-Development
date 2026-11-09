let products = [
    { id: 1, name: "Laptop", price: 55000 },
    { id: 2, name: "Mobile", price: 25000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Monitor", price: 12000 }
];

let container = document.createElement("div");
container.id = "products";

let h1 = document.createElement("h1");
h1.textContent = "Product Items";
h1.style.textAlign = "center";

let fragment = new DocumentFragment();
fragment.append(h1);

for(let item of products){
    let card = document.createElement("div");

    let name = document.createElement("h2");
    name.textContent = item.name;

    let price = document.createElement("h3");
    price.textContent = `Price: ₹${item.price}`;

    if(item.price > 10000){
        card.classList.add("premium");
    }else card.classList.add("budget");

    card.append(name, price);
    fragment.append(card);
}

container.append(fragment);

let body = document.querySelector("body");
body.append(container);