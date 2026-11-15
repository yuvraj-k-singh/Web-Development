const clockDiv = document.querySelector(".clock-container");

setInterval(()=>{
    let nowTime = new Date();
    clockDiv.textContent = nowTime.toLocaleTimeString();
}, 1000);