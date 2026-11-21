const form = document.querySelector("form");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    const rawValue = document.querySelector("input").value.trim();
    const age = Number(rawValue);
    //Creating new promise
    const message = new Promise((resolve, reject)=>{
        if(age >= 18){
            resolve("Eligible for voting!");
        }else{
            reject("Not Eligible for voting!");
        }
    })

    const h3 = document.querySelector("h3");
    //Promise handling
    message
        //handle completed operations
        .then((response)=>{
            h3.textContent = response;
        })
        //handle rejected operations or errors
        .catch((error)=>{
            h3.textContent = error;
        })

    form.reset();
})