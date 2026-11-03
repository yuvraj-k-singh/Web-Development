const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 55000 },
    { id: 2, name: "Mobile", category: "Electronics", price: 25000 },
    { id: 3, name: "Headphones", category: "Accessories", price: 2000 },
    { id: 4, name: "Keyboard", category: "Accessories", price: 1500 },
    { id: 5, name: "Smartwatch", category: "Electronics", price: 8000 },
    { id: 6, name: "Mouse", category: "Accessories", price: 800 },
    { id: 7, name: "Tablet", category: "Electronics", price: 30000 },
    { id: 8, name: "Monitor", category: "Electronics", price: 12000 },
    { id: 9, name: "Shoes", category: "Fashion", price: 3500 },
    { id: 10, name: "T-Shirt", category: "Fashion", price: 1000 },
    { id: 11, name: "Jeans", category: "Fashion", price: 2500 },
    { id: 12, name: "Backpack", category: "Accessories", price: 1800 },
    { id: 13, name: "Camera", category: "Electronics", price: 45000 },
    { id: 14, name: "Jacket", category: "Fashion", price: 4000 },
    { id: 15, name: "Speaker", category: "Accessories", price: 5000 }
];

let output = products.filter((item) => item.price > 5000);
console.log(`\nOutput Array: `);
console.log(output);