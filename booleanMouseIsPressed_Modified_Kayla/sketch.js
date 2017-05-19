/*
boolean by Dawn C. Hayes
copied(typed)by Kayla Serpa
*/

function setup() {
  createCanvas(600,400);// creates canvas
}

function draw() {
  background(0);// sets the background color
  stroke(255);// sets the outline color
  strokeWeight(4);//sets the thickness of the outline
  noFill();//no color for the shape
  
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY <300){
    /*if the mouse x position is greater than 300 and less than 400 and the y position
    is greater than 200 and less than 300 
    */
    if (mouseIsPressed){ //if the mouse is pressed change the canvas background color
      background(174, 109, 245);// background color
    }
    fill(50, 252, 245);//when mouse is over the position area changes that shape color
  }
  ellipse(300, 200, 100, 100);// creates shape 
}