function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  myTriangle(10, 10, 10, 200, 150, 200,100,0,10);
  myRect(200, 10, 350, 10, 350, 200, 200, 200,40,0,200);
  myCircle(200, 290, 110,40,0,40);

  
}
function myTriangle(t1X, t1Y, t2X, t2Y, t3X, t3Y,r,g,b) {
  fill(r,g,b)
  triangle(t1X, t1Y, t2X, t2Y, t3X, t3Y);
  
}
function myCircle(x, y, size,r,g,b) {
  fill(r,g,b)
  ellipse(x, y, size);
}
function myRect(q1X, q1Y, q2X, q2Y, q3X, q3Y, q4X, q4Y,r,g,b) {
   fill(r,g,b)
    quad(q1X, q1Y, q2X, q2Y, q3X, q3Y, q4X, q4Y);
  }
