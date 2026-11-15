const result = document.querySelector(".main-container");

setInterval(()=>{
    let currentTime = Date.now();
    let WCTime = new Date(2028, 9, 2).getTime();

    let remainingTime = WCTime - currentTime;

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));

    let hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);

    let minutes = Math.floor((remainingTime / (1000 * 60)) % 60);

    let seconds = Math.floor((remainingTime / 1000) % 60);
    result.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}, 1000);