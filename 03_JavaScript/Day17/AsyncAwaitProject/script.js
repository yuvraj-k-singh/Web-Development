async function github() {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();

    const parent = document.querySelector(".main-container");
    let fragment = new DocumentFragment();
    
    for(let user of data){
        const userContainer = document.createElement("div");
        userContainer.classList.add("user-container");

        const img = document.createElement("img");
        img.classList.add("user-img");
        img.style.height = "160px";
        img.style.width = "160px";
        img.style.borderRadius = "50%";
        img.src = user.avatar_url;

        const h1 = document.createElement("h1");
        h1.classList.add("username");
        h1.textContent = user.login;

        const link = document.createElement("a");
        link.classList.add("user-link");
        link.textContent = "Visit Now";
        link.target ="_blank";
        link.href = user.html_url;

        userContainer.append(img, h1, link);
        fragment.append(userContainer);
    }
    parent.append(fragment);
}

github();