const clock = document.querySelector(".box");
setInterval(function() {
    let date=new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);