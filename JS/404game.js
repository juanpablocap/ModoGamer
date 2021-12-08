//Comenzamos llamando todas las variables necesarias
let canvas = document.getElementById("game404");
let container = document.getElementById("touch");

//vamos creando las que utilizaremos para ir dibujando sobre canvas
//generales y pelota
let ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
const bRadius = 10;
let randomColor = "#0095DD";
//paleta para jugar
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
//movimiento de paleta
let rigthPress = false;
let leftPress = false;
let user = "Juan"
let score = 0;
//ladrillos 
let brickRowCount = 3;
let brickColumnCount = 5;
let brickWidth = 50;
let brickHeight = 20;
let brickPadding = 10;
let brickOffsetTop = 10;
let brickOffsetLeft = 4;

let bricks = [];
for (c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}
//Creamos las funciones que usaremos para mover la paleta,
// tanto en teclado como en pantalla por touch.
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
function keyDownHandler(event) {
  if (event.keyCode  === 39) {
    rigthPress = true;
  } else if (event.keyCode === 37) {
    leftPress = true;
  }
}
function keyUpHandler(event) {
  if (event.keyCode === 39) {
    rigthPress = false;
  } else if (event.keyCode === 37) {
    leftPress = false;
  }
}

container.addEventListener("touchmove", movex, false);
function movex(e) {
  if(e.targetTouches.length == 1){
    let touch = e.targetTouches[0];
    let deltaX= touch.pageX - canvas.offsetLeft;
    if(deltaX > 0 && deltaX < canvas.width){
    paddleX = deltaX - paddleWidth/2}
  }
     
}
// Comenzamos las funciones que van a dibujar los elementos y la funcionalidad del juego.
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, bRadius, 0, Math.PI * 2);
  ctx.fillStyle = randomColor;
  ctx.fill();
  ctx.closePath();
}
function drawPaddle(event) {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
}

function drawBricks() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      if (bricks[c][r].status == 1) {
        let brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        let brickY = r * (brickHeight + brickPadding) + brickOffsetTop;

        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function collisionDetect() {
  for (c = 0; c < brickColumnCount; c++) {
    for (r = 0; r < brickRowCount; r++) {
      let b = bricks[c][r];
      if (bricks[c][r].status == 1) {
        if (
          x > b.x &&
          x < b.x + brickWidth &&
          y > b.y &&
          y < b.y + brickHeight
        ) {
          dy = -dy;
          b.status = 0;
          colorChange();
          score++;
        }
      }
    }
  }
}
//Funcion principal, que debera ser llamada  para que comienze el juego.
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetect();
  gameWon();

  x += dx;
  y += dy;
  if (y + dy < bRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - bRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      gameOver();
    }
  }
  if (x + dx > canvas.width - bRadius || x + dx < bRadius) {
    dx = -dx;
  }
  if (rigthPress && paddleX < canvas.width - paddleWidth) {
    paddleX += 7;
  } else if (leftPress && paddleX > 0) {
    paddleX += -7;
  }
}
function gameOver() {
  let over = document.createElement("div");
  over.innerHTML = `<h2>GAME OVER</h2>`;
    
  let fat = document.querySelector(".container");
  fat.appendChild(over);
  clearInterval(inter);
}

function gameWon() {
    if(score == 15){
    let win = document.createElement("div");
    win.innerHTML = `<h2>Felicidades, ${user}. GANASTE!!</h2>
    <button onclick="again()" class="btn btn-primary ml-5 ">JUGAR</button>`;
    let fat = document.querySelector(".container");
    fat.appendChild(win);
    clearInterval(inter);}

}


function again() {
  window.location.reload();
}

function colorChange() {
  randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
}
//Con el setinterval damos inicio a la funcion, y  para la 
//velocidad del mismo. Se va a dibujar un nuevo canvas con las nuevas posiciones de los
//elementos cada ese intervalo.
let inter = setInterval(draw, 60);
