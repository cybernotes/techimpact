/*
Conditonal If statement 
By Dawn C. Hayes
Copied by Kayla Serpa (typed)
*/
var circX = 200; //creates variable for the x coordinate circle
var circY = 200; // creates variable for the y coordinate circle
var circStroke = 125; //creates variable for the color for the circle's stroke
var circR = 55; //creates variable for the R value
var circG = 135; // creates variable for the G value
var circB = 225; // creates variable for the B value
var circSize = 75; // creates variable for the size of the circle
var recX = 100; // creates variable for the x coordinate for the rectangle
var recY = 300; // creates variable for the y coordinate for the rectangle
var recStroke = 35; // creates variable for the color for the rectangle's stroke
var recCol = 0; // creates variable for the color of the rectangle while also assigning it's color
var recSize = 75; // creates variable for the rectangle's size
var canvBG; // creates variable for the canvas color
canvBG = 125, 55, 255; // sets the canvas color's values
var speed = 2;


function setup() {
  createCanvas(400, 400); // sets the canvas size
}

function draw() {
  background(canvBG); // sets the background color to the canvBG variable
  stroke(circStroke); // sets the stroke color to the 
  fill(circR, circG, circB); // sets the color of the circle
  stroke(circStroke); // sets the color of the stroke/outline of the circle
  ellipse(circX, circY, circSize, circSize); // creates the circle using the x, y and size variables created before
  ellipse(circX + 50, circY - 75, circSize, circSize); // creates the second circle using the same variables by making adjustments to the coordinates by adding and subtracting values
  fill(circR, circG, circB); // sets the color of the second circle

  circX = circX + speed; // sets the speed of the circle by adding the speed variable to the circle's x cooridinate 

  stroke(recStroke); // sets the color of the stroke/outline of the rectangle
  fill(recCol); // sets the color of the rectangle
  rect(recX, recY, recSize, recSize); // creates the rectangle using the x, y, and size variables 

  recY = recY - speed; // sets the speed of the circle by subtracting the speed variable from the rectangle's y coordinate

  if (circX > width || circX < 0) { // if the circle's x value does not exceed the set width of the canvas or if the x value is less than 0 

    speed = speed * -1; // if the circle x value meets any of the if requirements multiply the speed value by -1 this will cause whatever variable using speed to change

  }
}