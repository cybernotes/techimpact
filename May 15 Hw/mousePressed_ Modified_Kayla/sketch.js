/*
Example that use mousePressed() to demonstrate event-driven programming. The background shape's color changes when mouse is pressed.

Created by Dawn C. Hayes March 2017
copied(typed) by Kayla Serpa
*/

var diam = 200; // creates variable for the diameter 
var bgCol = 255; //creates variable for color
var bgSwitch = 0; //creates variable for the background switch 

function setup() {
  createCanvas(400, 400); //creates canvas
  background(bgCol); //sets the background color
  noStroke(); //the shape will have no outline
  fill(255, 0, 0); //sets the color for the shape
  ellipse(width / 2, height / 2, diam, diam); // creates a circle using half the height and width of the canvas
}

function draw() {
  //noStroke();
  //fiil(255, 0,0);
  //ellipse(width/2, height/2, diam, diam);
}

function mousePressed() { // creates a function of mousePressed, when mouse is pressed do these actions

  background(bgSwitch); //sets the background color using the variable
  noStroke(); //shape will have no outline
  fill(0, 0, 255); // sets the shape's color
  ellipse(width / 2, height / 2, diam, diam); // sets the size of the shape by dividing the canvas size by half.
}