/*
Pong
By Kayla S and Lisa MG
Driver Lisa MG 
Typer Kayla S

I was the typer for this project. The goal was to create a simulation of the classic game pong. 
*/
var recX = 24; //creates variable for the  x coordinate of the rectangle
var recY = 84; //creates variable for the y coordinate of the rectangle
var recCol; // creates variable for rectangle color
recCol = 'rgb(44, 214, 240)'; // assigns color value - the rgb interger could be replaced with just the number values
var recSize = 100; // creates variable for rectangle size
var circX = 300; // creates variable for x coordinate of the circle
var circY = 200; //creates variable for y cooridnate of the circle
var circSize = 50; //creates variable for the circle size
var circCol //creates variable for circle color
circCol = 'rgb (187, 240, 44)'; // assigns circle color value - the rgb interger could be replaced with just the number values
var speed = 5 // creates variable for speed value
function setup() {
  createCanvas(600, 400); //creates the canvas
}

function draw() {
  background(0); // sets the background to black
  noStroke(); //no outline color for the rectangle
  fill(recCol); //applies color to rectangle
  rect(recX, recY, recSize, recSize); //creates the rectangle using the variables
  rect(recX + 450, recY + 200, recSize, recSize); //creates a second rectangle adding values to the coordinates to set the rectangle to the other side of the canvas
  fill(circCol); // applies color to circle
  noStroke(); // no outline color to the circle
  ellipse(circX, circY, circSize, circSize); // creates the circle using the variables 

  recY = recY - speed // sets the speed of the rectangle using the y coordinates so that the rectangles moves along the y-axis

  circX = circX + speed // sets the speed of the circle using the x coordinates so that the circle moves along the x-axis

  if (recY > height || recY < 0) { // if the rectangles' y coordinates is greater than the height or if the rectangles' y coordinates are less than 0
    speed = speed * -1; // multiply the current speed by -1 - this will change the direction of the object, rectangle
  }
  if (circX > width || circX < 0) { //if the circle's x coordinates is greater than the width or if the circle's x coordinates are less than 0 


    speed = speed * -1; //multiply the current speed by -1 this will change the direction of the object, circle
  }
  /* this is where we run into a problem, looking over the code we could compare the circX to recY see if it's greater than also or create an else to cover it
  what ends up happening is the complier reads whether recY hits either of the conditions if it doesn't it goes to see if circX has met any conditions if it has it changes the speed
  this causes the sporatic changing direction ofthe rectangles and circle at different times
  This can possibly be resolved by adding a second speed variable and assign it to the circle value so there is two speed values.
  */
  if (mouseIsPressed) { // if the mouse is clicked 
    speed = speed * 0; // multiply the speed value by 0 - this will cause the circle and rectangles to stop moving 
  }
  /* else{
    speed = speed *-1
    }*/
  /*
  We tried creating an else control to cause the circle and rectangles to begin moving again but ran into some problems it could possibly be because we forgot 
  that when you multiply 0 by anything it will always be 0 so we can add instead of multiply

  */


}