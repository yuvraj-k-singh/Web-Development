let grandparent = document.querySelector(".grandparent");
let parent = document.querySelector(".parent");
let child = document.querySelector(".child");

grandparent.addEventListener('click', ()=>{
    console.log(`GrandParent Clicked!`);
});

parent.addEventListener('click', ()=>{
    console.log(`Parent Clicked!`);
});

child.addEventListener('click', (e)=>{
    console.log(`Child Clicked!`);
    //e.stopPropagation(); -> STOP further execution of parent events
});