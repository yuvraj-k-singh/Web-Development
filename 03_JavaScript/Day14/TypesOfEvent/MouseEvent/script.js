let btn = document.querySelector("button");
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2");
let div3 = document.querySelector("#div3");

btn.addEventListener('click', ()=>{
    console.log(`Mouse Click`);
});

div1.addEventListener('dblclick', ()=>{
    console.log(`Mouse Double Click`);
});

div2.addEventListener('mouseover', ()=>{
    console.log(`Mouse hover`);
});

div3.addEventListener('mousedown', ()=>{
    console.log(`Mouse Pressed`);
})

div3.addEventListener('mouseup', ()=>{
    console.log(`Mouse Release`);
})