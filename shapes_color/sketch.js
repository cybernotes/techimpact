/*Basic Colors
by Kayla Serpa; based off of Dawn Hayes work Basic P5 Sketch
*/


function setup() {
  createCanvas(1800, 1800);
}

function draw() {
  background(51); //sets background color
  fill ( 255,87,51); // sets the fill color of the circle
  stroke ( 51,91,255);//sets the stroke color
  strokeWeight (6);//sets how thick the stroke line is for all three shapes
  ellipse(500, 500, 100, 100); //shape 
  fill (50,5,90); // sets the fill color for the rectangle below
  stroke (0,100,100)// sets the stroke color or outline color
  rect(39, 30, 55, 55);//shape
  fill (255,0,255)// sets the color for the triangle
  stroke (0,255,0)// setts the outline color
  triangle(200, 250, 150, 400, 450, 400);//shape

}