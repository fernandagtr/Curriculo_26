const name = document.querySelector("h1");

setInterval(()=>{

name.style.textShadow =

0 0 ${Math.random()*10}px #ff00cc,
0 0 ${Math.random()*20}px #7b00ff
;

},300);