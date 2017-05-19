/*
While Loop
By Dawn C. Hayes
Copied by Kayla Serpa (typed)
*/

function setup() {
createCanvas(600, 400);// creates canvas size
}

function draw() {
  background(14, 56, 105);// sets background color
  
  var x = 0;// creates a variable for y
  while (x <= width){// if y is less than or equal to the height of the canvas
    stroke(0);// sets the color of the outline 
    fill(255);// sets the color of the rectangle
    rect(x, 150, 50, 50);// creates the rectangle with the y coordinate set to variable y
    x = x + 50;// adds 50 to the y coordinate so when looping it adds 50 over and over
  }
  for (y = 0; y <= height; y +=50){// sets y variable to 0  when y is less than the height of canvas add 50 to y
    stroke(255);// sets the outline color
    fill(0);//sets the color of the rectangle
    rect(300, y, 50, 50);// creates the rectangle with the y coordinate set to variable y
  }
}