let h1 = document.getElementById("h1");

//Issue(drawback) -> Here event1 is override by event2.
h1.onclick = function(){
    alert("DOM Event1!");
}

h1.onclick = function(){
    alert("DOM Event2!");
}