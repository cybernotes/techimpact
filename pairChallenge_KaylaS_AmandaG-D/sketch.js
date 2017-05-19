/*
Pretty Presentation
Typer Kayla Serpa, Driver Amanda Gonzalez
*/

var seaR = 66; //here I am demonstrating variables
var seaG = 241;
var seaB = 244;
var circ = { //here I am demonstrating an array
  a: 50,
  b: 50,
  diam: 25,
}
var speed = 4; //speed

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(seaR, seaG, seaB); //using the variables as bg
  fill(random(225), random(225), random(225)); //filled it with 3 random color values
  ellipse(circ.a, circ.b, circ.diam, circ.diam); //used array values here

  circ.a = circ.a + speed //added speed to circ.a to move shape to the right

  if (circ.a > width || circ.a < 0) {// used if statement to make shape bounce back 
    speed = speed * -1;
  }
}