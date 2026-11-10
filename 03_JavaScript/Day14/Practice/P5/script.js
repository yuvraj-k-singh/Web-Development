const password = document.querySelector("#password");
const button = document.querySelector("#toggleBtn");

button.addEventListener('click', (e)=>{
    if (password.type === "password") {
        password.type = "text";
        //toggleBtn.textContent = "Hide Password";
    } 
    else {
        password.type = "password";
        //toggleBtn.textContent = "Show Password";
    }
});