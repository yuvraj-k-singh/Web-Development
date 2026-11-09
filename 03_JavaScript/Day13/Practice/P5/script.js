let ul = document.getElementById("list");
ul.removeChild(ul.children[2]);

for(let list of ul.children){
    console.log(list.textContent);
}