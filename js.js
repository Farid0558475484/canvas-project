var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");


canvas.width = 400;
canvas.height = 200;


context.fillStyle = "red";
context.fillRect(100, 50, 150, 75);

context.fillStyle = "blue";
context.fillRect(150, 100, 100, 50);
context.clearRect(0, 0, 400, 200);

context.strokeStyle = "green";
context.lineWidth = "10";
context.rect(50,50,100,100) // x, y, width, height
context.stroke()
context.fillStyle = "yellow";
context.fill()

console.log("Hello World");
