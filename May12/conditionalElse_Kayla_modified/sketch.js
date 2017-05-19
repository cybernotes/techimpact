var circX = 200; //creates variable for x coordinate of circle
var circY = 200; //creates variable for y coordinate of circle
var circStroke = 125; //creates variable for circle outline color
var circR = 0; // creates variable for R value of color
var circG = 100; // creates variable for G value of color
var circB = 200; //creates variable for B value of color
var circSize = 75; //creates variable for circle size
var recX = 100; //creates variable for x coordinate of rectangle
var recY = 300; //creates variable for y coordinate of rectangle
var recStroke = 35; // creates variable for rectangle outline color
var recCol = 0; // creates variable for rectangle color
var recSize = 75; //creates variable for rectangle size
var canvBG = 225; //creates variable for canvas color
var speed = 2; //creates variable for the speed of objects
var alph = 125; //creates variable for the alpha value of color

function setup() {
  createCanvas(600, 600); //creates canvas size
}

function draw() {
  background(canvBG); // sets background color using created variable
  stroke(circStroke); //sets the outline color using created variable
  fill(circR, circG, circB, alph); //sets the color for the circle using the variables
  stroke(circStroke); //sets the stroke color using the variable
  ellipse(circX, circY, circSize, circSize); // creates a circle using the variables
  ellipse(circX + 200, circY, circSize, circSize); //creates a second circle by adding and subtracting to the x y variables to seperate circle
  fill(circR, circG, circB, 135); // sets the color of the second circle

  stroke(recStroke); // sets the color of the outline of the rectangle
  fill(recCol); // sets the color of the rectangle
  rect(recX, recY, recSize, recSize); // creates the rectangle using the variables

  circY = circY + speed; //changes the circle x coordinate by adding speed variable
  recX = recX - speed; // changes the rectangle y cordinate by adding speed variable

  if (circY < width) { // if the circle x is less than width

    circSize += 0.5; // add .5 to the circle size

  } else { //otherwise
    if (circY > width) { // if the circle x is greater than the width 
      speed = speed * -1; // multiply the speed by -1
      circSize *= -1 // multiply the circle size by -1
    }
  }

}