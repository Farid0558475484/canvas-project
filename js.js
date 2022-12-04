var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 200;

// draw1
context.fillStyle = "red";
context.fillRect(100, 50, 150, 75);

//draw2
context.fillStyle = "blue";
context.fillRect(150, 100, 100, 50);

//draw3
context.strokeStyle = "green";
context.lineWidth = "10";
context.rect(50,50,100,100) // x, y, width, height
context.stroke()
context.fillStyle = "yellow";
context.fill()

context.clearRect(0, 0, 400, 200);

//draw4
context.beginPath();
context.strokeStyle = "red";
context.lineWidth = "5";
context.moveTo(100, 50);
context.lineTo(150, 150);
context.stroke();

//draw5
context.beginPath();
context.strokeStyle = "blue";
context.lineWidth = "20";
context.moveTo(200, 50);
context.lineTo(300, 50)
context.lineTo(300, 100)
context.lineCap = "square";
context.stroke();

context.clearRect(0, 0, 400, 200);

//draw6

context.beginPath();
context.moveTo(50, 150);
context.lineTo(150, 50);
context.lineTo(200, 150);
// context.lineTo(50, 150);
context.closePath();
context.lineWidth = "14";
context.lineCap="round";
context.stroke();
context.fillStyle = "red";
context.fill();

context.clearRect(0, 0, 400, 200);

console.log("Hello World");
