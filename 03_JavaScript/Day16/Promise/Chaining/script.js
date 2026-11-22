fetch('https://api.github.com/users')
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        const parent = document.querySelector(".main-container");
        let fragment = new DocumentFragment();
        for(let i=0; i<data.length; i++){
            const img = document.createElement("img");
            img.src = data[i].avatar_url;
            img.style.height = "150px";
            img.style.width = "150px";
            fragment.append(img);
        }
        parent.append(fragment);
    })