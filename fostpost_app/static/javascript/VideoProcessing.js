var v = document.getElementById('v');
var canvas = document.getElementById('VideoCanvas');
var context = canvas.getContext('2d');
var cw = Math.floor(canvas.clientWidth / 100);
var ch = Math.floor(canvas.clientHeight / 100);
canvas.width = cw;
canvas.height = ch;
v.addEventListener('click', function(){
        draw(this,context,cw,ch);
    },false);