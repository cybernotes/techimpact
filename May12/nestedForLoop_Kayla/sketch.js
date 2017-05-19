/*
Nested For Loop
By Dawn C. Hayes
copied by Kayla Serpa
*/
function setup() {
  createCanvas(600, 400); // creates canvas size
}

function draw() {
  background(0, 64, 135); //sets background color using RGB
  strokeWeight(4); //sets the outline thickness to 4
  stroke(255); //sets stroke color 

  for (var i = 0; i <= width; i += 60) { //creates a variable and sets to 0 when i is less than or equal to the width i = i +60
    for (var j = 0; j <= height; j += 60) { //creates j variable sets to 0, if j is less than or equal to the height j= j +60
      fill(mouseX, random(255), mouseY); // sets the fill color to match the xy position of the mouse, mouseX to R values and mouseY to B values with G being set to random
      rect(i, j, 35, 35); // creates rectangle and sets coordinates to i and j variables and sets the size to 35

      /* this creates multiple squares within the bounds of the canvas*/
    }
  }
}