  /* 
  Non moving Circle 
  By Kayla Serpa adapted from Dawn C. Hayes sketch */
  
  var circX; // creates a variable for the coordinate X for the circle
  circX = 150; // this assigns a number value to the variable 
  var circY; // creates a variable for the coordinate Y for the circle
  circY = 150; // assigns a number value to the variable
  var circStroke = 100; // creates a variable for the stroke color for the circle and assigns a number value that defines the color
  var circR = 100;//creates a variable for the circle color and assigns a number value to the circle Red color
  var circG = 155;// creates a variable for the circle color and assigns a number value to the circle Green color
  var circB = 200;// creates a variable for the circle color and assigns a number value to the circle Blue color
  var circSize = 100;// creates a variable for the circle size and assigns a number value
  canvBG = 125, 55, 255; // assigns a color value to the variable canvBG for the background.
  
  
  function setup() {
    createCanvas(500, 500); // sets up the canvas or window
  }
  
  function draw() {
    background(canvBG);// sets the background color using the variable
    stroke(circStroke);// sets the stroke color using the variable
    fill(circR, circG, circB);//sets the fill color using the variables set before
    stroke(circStroke);//sets the stroke color using the variable
    ellipse(circX, circY, circSize, circSize);// sets the ellipse coordinates using the numbers assigned from the variables and the size
    ellipse(circX + 100, circY - 50, circSize, circSize);//creates a second ellipse but changes the variables for the coordinates by using operators to subtract or add
    fill(circR, circG, circB, 135);//sets the fill color 
   
  }