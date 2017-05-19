/* Kayla's presentation!- Amanda as the typer! May 18th 
PairProject

*/

var circ = { // an array example. 
  x: 300,
  y: 300,
  diam: 50,
  xspeed: 1.5,
  yspeed: -3,
  display: function() { // function within an object
    stroke(random(255));
    fill(random(255), random(255), random(255));
    ellipse(this.x, this.y, this.diam, this.diam);
  },
  move: function() { // function within an object
    circ.x = circ.x + circ.xspeed;
    circ.y = circ.y - circ.yspeed;

  }
}

function setup() {
  createCanvas(600, 600);
laughter();
}

function draw() {
  bounce(); //declare functions
  display();
}


function bounce() { // used the function that was declared before
  if (circ.x > width || circ.x < 0) { // if statement was used here to make the shape bounce off the canvas

    circ.xspeed = circ.xspeed * -1
    background(random(255), random(255), random(255));
  }

  if (circ.y > height || circ.y < 0) { // if statement was used here to make the shape bounce off the canvas

    circ.yspeed = circ.yspeed * -1
    background(random(255), random(255), random(255));
  }
  
}


/*function move () {   -A different way of doing the same thing that was in the array
  circ.x = circ.x + circ.xspeed;
  circ.y = circ.y - circ.yspeed;

}*/

function display() { // a function to display circle move and circle display values.
  circ.move();
  circ.display();
}