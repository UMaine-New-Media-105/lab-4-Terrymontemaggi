function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  myTriangle(10,10,10,200,150,200)
  myRect(200,10,350,10,350,200,200,200)
  myCircle(200,290,110)
  
  
 function myRect(q1X,q1Y,q2X,q2Y,q3X,q3Y,q4X,q4Y){
   
   quad(q1X,q1Y,q2X,q2Y,q3X,q3Y,q4X,q4Y)
   
   
 }
}
function myTriangle(t1X,t1Y,t2X,t2Y,t3X,t3Y){
  
  triangle(t1X,t1Y,t2X,t2Y,t3X,t3Y)
  
  
}
function myCircle(x,y,size){
  ellipse(x,y,size)
  
  
  
}
