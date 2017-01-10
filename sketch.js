var backgroundColor;
var isOverRectangle1;


function setup() {
  
  createCanvas(800, 600);
  backgroundColor = color(255, 255, 255);
  colorMode(RGB);

  
}
 
function draw() 
{
  background(backgroundColor);

  // check if mouse is inside the rectangle
  // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
  
  if (touchX >= 10 && touchX <= 10+700 && touchY >= 500 && touchY <= 500+50) 
  {
    isOverRectangle1 = true;
  } else {
    isOverRectangle1 = false;
  }
  
  // draw a rectangle1
  rectMode(CORNER);
  noStroke();
  if(isOverRectangle1 == true) {
    fill(200);
     } else {
        
	fill(100); 
  }
  
  rect(10, 500, 700, 50);
  
  
}


function mousePressed() {
  if(isOverRectangle1 == true) {
    backgroundColor = color(random(255),random(255),random(255));
  }
   

}