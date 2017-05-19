/*
Multicolor Ball interaction
based off sketch by Dawn C. Hayes
created by Kayla Serpa
*/

var circle = { // creates array for circle {allows for multiple assignment
  x: 300, //creates x value
  y: 300, //creates y vaule
  diam: 50, //creates circle size
  xspeed: 1.5, //circle x speed
  yspeed: -3 // circle y speed
}


function setup() {
  createCanvas(600, 600); //sets canvas
  background(0); //sets background to 0

}

function draw() {
  move(); //creates a move placeholder for it to become a function
  bounce(); //creates a bounce placeholder for it to become a function 
  display(); //creates a display placeholder for it to become a function
}

function bounce() { //sets bounce as a function
  if (circle.x > width || circle.x < 0) { //if x value of the circle is greater than the width OR if the x value is less than 0
    circle.xspeed = circle.xspeed * -1; // change the circle x speed by multiplying by -1
    background(random(255), random(255), random(255)); //sets the background color to random colors


  }

  if (circle.y > height || circle.y < 0) { //if y value of circle is greater than the width OR if the y value is less than 0
    circle.yspeed = circle.yspeed * -1; //change the circle y speed by multiplying by -1
    background(random(255), random(255), random(255)); // sets the background to a random color
  }
}

function move() { //creates the function move
  circle.x = circle.x + circle.xspeed; //changes the x value for the circle by adding the x speed value to it
  circle.y = circle.y + circle.yspeed; //

}

function display() { //creates the display function
  noStroke();
  ellipse(circle.x, circle.y, circle.diam, circle.diam);
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
  } else {
    fill(255)
  }
}