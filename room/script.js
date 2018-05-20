var socket;
window.onload = main;

function main() {
    socket = io.connect('http://localhost:3000');


    function drawellipse(arr) {
        fill(arr[2], arr[3], arr[4]);
        ellipse(arr[0], arr[1], 20, 20);
    }

    socket.on('gceq', drawellipse)
}




function setup() {
    createCanvas(2000, 2000);
    background('#acacac');

    r = random(255); 
    g = random(255);
    b = random(255);
}
function mouseDragged() {
    socket.emit("kordinatner", [mouseX, mouseY, r, g, b])
}













