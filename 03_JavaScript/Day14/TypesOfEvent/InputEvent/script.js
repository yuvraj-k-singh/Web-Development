let text = document.querySelector("#text");

text.addEventListener('focus', ()=>{
    console.log("InputBox Focus -> Click Inside");
});

text.addEventListener('blur', ()=>{
    console.log("InputBox Blur -> Click Outside");
});

text.addEventListener('input', ()=>{
    console.log("InputBox Input -> Enter Something");
});

text.addEventListener('change', ()=>{
    console.log("InputBox Change -> Save Something");
});

text.addEventListener('input', (e)=>{
    console.log(e.target.value);
});