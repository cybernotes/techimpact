function setup() {
  createCanvas(1800, 1800);
}

function draw() {
  background(51); //sets background color
  fill ( 255,87,51); // sets the fill color of the shape(s) that follow
  stroke ( 51,91,255);//sets the stroke color
  strokeWeight (6);//sets how thick the stroke line is
  ellipse(500, 500, 100, 100); //shape 
  rect(39, 30, 55, 55);//shape
  triangle(200, 250, 150, 400, 450, 400);//shape

}