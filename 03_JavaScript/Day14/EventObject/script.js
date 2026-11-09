let div = document.querySelector(".div");

div.addEventListener('click', (e)=>{
    console.log(`Event Object: `);
    console.log(e);
    console.log(`Event Type: ${e.type}`);
    console.log(`Event Target: ${e.target}`);
    console.log(`Event ClientX: ${e.clientX}`);
    console.log(`Event ClientY: ${e.clientY}`);
    console.log(`Event Value: ${e.target.textContent}`);
});