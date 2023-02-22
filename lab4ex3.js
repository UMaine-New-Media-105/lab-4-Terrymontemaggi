function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (mouseIsPressed === true) {
    
    myCircle(250, 25, 50, 50, 50, 0);
    myCircle(250, 25, 25, 0, 0, 0);
    myCircle(200, 25, 50, 50, 50, 0);
    myCircle(200, 25, 25, 0, 0, 0);
    myCircle(225, 69, 50, 30, 90, 0);
    myTriangle(100, 10, 100, 200, 10, 200, 100, 0, 10);
  } else {
    rect(200, 25, 50, 50);
  }
  myTriangle(10, 10, 10, 200, 150, 200, 100, 0, 10);

  myCircle(200, 290, 110, 40, 0, 40);
}
function myTriangle(t1X, t1Y, t2X, t2Y, t3X, t3Y, r, g, b) {
  fill(r, g, b);
  triangle(t1X, t1Y, t2X, t2Y, t3X, t3Y);
}
function myCircle(x, y, size, r, g, b) {
  fill(r, g, b);
  ellipse(x, y, size);
}
