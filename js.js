var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var myColor = "black";

document.getElementById("color").oninput = function () {
  myColor = this.value;
};

canvas.width = 300;
canvas.height = 300;

// draw1
// context.fillStyle = "red";
// context.fillRect(100, 50, 150, 75);

// //draw2
// context.fillStyle = "blue";
// context.fillRect(150, 100, 100, 50);

// //draw3
// context.strokeStyle = "green";
// context.lineWidth = "10";
// context.rect(50, 50, 100, 100); // x, y, width, height
// context.stroke();
// context.fillStyle = "yellow";
// context.fill();

// context.clearRect(0, 0, 400, 200);

// //draw4
// context.beginPath();
// context.strokeStyle = "red";
// context.lineWidth = "5";
// context.moveTo(100, 50);
// context.lineTo(150, 150);
// context.stroke();

//draw5
// context.beginPath();
// context.strokeStyle = "blue";
// context.lineWidth = "20";
// context.moveTo(200, 50);
// context.lineTo(300, 50);
// context.lineTo(300, 100);
// context.lineCap = "square";
// context.stroke();

// context.clearRect(0, 0, 400, 200);

// draw6

// context.beginPath();
// context.moveTo(50, 150);
// context.lineTo(150, 50);
// context.lineTo(200, 150);
// // context.lineTo(50, 150);
// context.closePath();
// context.lineWidth = "14";
// context.lineCap = "round";
// context.stroke();
// context.fillStyle = "red";
// context.fill();

// context.clearRect(0, 0, 400, 200);

console.log("Hello World");

canvas.onmousedown = function (event) {
  canvas.onmousemove = function (event) {
    var x = event.offsetX;
    var y = event.offsetY;

    context.fillRect(x - 5, y - 5, 10, 10);
    context.fillStyle = myColor;
    context.fill();
  };

  canvas.onmouseup = function (event) {
    canvas.onmousemove = null;
  };
};

//// Canvas-1

var canvas1 = document.getElementById("canvas1");
var context1 = canvas1.getContext("2d");

canvas1.width = 400;
canvas1.height = 200;

context1.beginPath();

var pi = Math.PI;
context1.lineWidth = 5;
context1.strokeStyle = "red";
context1.fillStyle = "yellow";
context1.arc(150, 100, 75, 0, 2 * pi, false);
context1.stroke();
context1.fill();

context1.beginPath();

var pi = Math.PI;
context1.lineWidth = 5;
context1.strokeStyle = "green";
context1.fillStyle = "pink";
context1.arc(270, 100, 75, 0, 2 * pi, false);
context1.stroke();
context1.fill();

///////// canvas-2
const canvas2 = document.getElementById("canvas2");
const context2 = canvas2.getContext("2d");

canvas2.width = 400;
canvas2.height = 200;
context1.beginPath();

var x = 200;
var y = 100;

var stepCount = 0;
var direction;
var timer;
var myX;
var myY;

function drawDot() {
  context2.clearRect(0, 0, 400, 200);

  if (stepCount === 0) {
    stepCount = Math.floor(15 * Math.random());
    direction = Math.floor(8 * Math.random());
  } else {
    stepCount--;
  }

  switch (direction) {
    case 0:
      y = y - 1; //yuxari

      break;

    case 1:
      x = x + 1; //saga

      break;

    case 2:
      y = y + 1; //asagi

      break;

    case 3:
      x = x - 1; //sola

      break;

    case 4:
      x = x + 1; //saga
      y = y - 1; //yuxari

      break;

    case 5:
      x = x + 1; //saga
      y = y + 1; //asagi

      break;

    case 6:
      x = x - 1; //sola
      y = y + 1; //asagi

      break;

    case 7:
      x = x - 1; //sola
      y = y - 1; //yuxari

      break;

    default:
      break;
  }

  if (x < 0 || x > 400 || y < 0 || y > 200) step = 0;
  context2.fillRect(x - 3, y - 3, 6, 6);
  context2.beginPath();
  context2.moveTo(x, y);
  context2.lineTo(myX, myY);
  context2.stroke();

  timer = setTimeout(drawDot, 100);
}

canvas2.onmousemove = function (event) {
  myX = event.offsetX;
  myY = event.offsetY;
};

drawDot();

////// canvas-4

const canvas4 = document.getElementById("canvas4");
const context4 = canvas4.getContext("2d");

canvas4.width = 400;
canvas4.height = 200;

var x4 = 0;
var timer4 = 0;

function drawSin() {
  y4 = 100 + 50 * Math.sin(x4);
  x4 = x4 + 0.2;
  context4.fillRect(5 * x4, y4, 2, 2);
  timer4 = setTimeout(drawSin, 10);
}

drawSin();

////// canvas-5

const canvas5 = document.getElementById("canvas5");
const context5 = canvas5.getContext("2d");

canvas5.width = 600;
canvas5.height = 600;

context5.beginPath();

var R = 200;
var r = 140;
var d = 120;
var t = 0;

var timer5 = 0;

function spiro() {
  var x = (R - r) * Math.cos(t) + d * Math.cos(((R - r) * t) / r);
  var y = (R - r) * Math.sin(t) - d * Math.sin(((R - r) * t) / r);

  t = t + 0.05;
  context5.fillRect(300 + x, 300 + y, 4, 4);
  timer5 = setTimeout(spiro, 10);
}

spiro();

//////canvas-6

const canvas6 = document.getElementById('canvas6');
const context6 = canvas6.getContext('2d');

canvas6.width = 600;
canvas6.height = 600;

var mas=[];
var count=0;
var timer;

canvas6.onclick = function(event){
	var x = event.offsetX;
	var y = event.offsetY;
	console.log(x);
	console.log(y);
	x = Math.floor(x/10); //300 /10 = 30
	y = Math.floor(y/10); //300 /10 = 
	mas[y][x]=1;
	console.log(mas);
	drawField();
}

function goLife(){
	var n=60, m=60;
	for (var i=0; i<m; i++){
		mas[i]=[];
		for (var j=0; j<n; j++){
			mas[i][j]=0;
		}
	}
}
goLife();

function drawField(){
	context6.clearRect(0, 0, 600, 600);
	for (var i=0; i<60; i++){
		for (var j=0; j<60; j++){
			if (mas[i][j]==1){
				context6.fillRect(j*10, i*10, 10, 10);
			}
		}
	}
}

function startLife(){
	//моделирование жизни
	var mas2 = [];
	for (var i=0; i<60; i++){
		mas2[i]=[];
		for (var j=0; j<60; j++){
			var neighbors = 0;
			if (mas[fpm(i)-1][j]==1) neighbors++;//up
			if (mas[i][fpp(j)+1]==1) neighbors++;//right
			if (mas[fpp(i)+1][j]==1) neighbors++;//bottom
			if (mas[i][fpm(j)-1]==1) neighbors++;//left
			if (mas[fpm(i)-1][fpp(j)+1]==1) neighbors++;
			if (mas[fpp(i)+1][fpp(j)+1]==1) neighbors++;
			if (mas[fpp(i)+1][fpm(j)-1]==1) neighbors++;
			if (mas[fpm(i)-1][fpm(j)-1]==1) neighbors++;
			(neighbors==2 || neighbors==3) ? mas2[i][j]=1 : mas2[i][j]==0;
		}
	}
	mas = mas2;
	drawField();
	count++;
	document.getElementById('count').innerHTML = count;
	timer = setTimeout(startLife, 300);
}

function fpm(i){
	if(i==0) return 60;
	else return i;
}
function fpp(i){
	if(i==59) return -1;


	else return i;
}



document.getElementById('start').onclick = startLife;

