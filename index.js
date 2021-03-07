
const cvs = document.getElementById("canvas");
const ctx = cvs.getContext("2d");
i = 0;
size = Math.PI / 8;
function draw() {
    ctx.fillStyle = "green";
    total = size * i;
    if (total <= (Math.PI * 2)) {
        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, total, false);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
        i++;
    }
}
rad = 50;
function destroy() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    rad = rad - 5;
    if (rad > 0) {
        ctx.beginPath();
        ctx.arc(200, 200, rad, 0, Math.PI * 2, false);
        ctx.strokeStyle = 'blue';
        ctx.stroke();
    }
    else {
        clearInterval(des);
    }
}
function start() {
    val = document.getElementById('event').value;
    if (val == 'draw a circle') {
        let game = setInterval(draw, 200);
    }
    else {
        des = setInterval(destroy, 200);
    }
}