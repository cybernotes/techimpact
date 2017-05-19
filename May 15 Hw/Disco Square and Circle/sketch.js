/* 
Disco Time
Based off Sketch by Dawn C. Hayes
Created by Kayla Serpa
*/


var rectangle = { // creates variable rectangle
  x: 60, //sets x variable
  y: 90, //sets y variable
  size: 60, //sets size variable
  speed: 4, //sets speed variable
  display: function() { //creates a function within the array variable
    noStroke(); //no outline for the rectangle
    fill(random(255), random(255), random(255)); //sets color for the rectangle to random
    rect(this.x, this.y, this.size, this.size); //creates the rectangle using the existing variables within the array
  },
  move: function() { //creates a function within the array variable
    this.x = this.x + this.speed; //using the x variable within this array add with the speed variable within the array
    this.y = this.y + this.speed; //using the y variable within this array add with the speed variable within the array 
  }
}

var circle = { // creates variable circle
  x: 100, //creates x variable for coordinate x
  y: 200, //creates y variable for coordinate y 
  size: 90, //creates size variable for circle
  speed: 2,
  display: function() { //creates a function within the array variable
    stroke(random(255), random(255), random(255)); //sets the outline color to random
    strokeWeight(3) //sets the outline thickness to 3
    fill(random(255), random(255), random(255)); //sets the color of the circle to be random
    ellipse(this.x, this.y, this.size, this.size) //creates the circle using the values within this array
  },
  move: function() {
    this.x = this.x + this.speed; // this sets the speed of the x axis using the speed variable within this array
    this.y = this.y + this.speed; //this sets the speed of the y axis using the speed variable within this array
  }
}

function setup() {
  createCanvas(400, 600) // creates canvas size
}

function draw() {
  background(0); //sets background color to black
  rectangle.move(); //from the array rectangle use the move function
  rectangle.display(); //from the array rectangle use the display function
  circle.move(); // from the circle array use the move function
  circle.display(); //from the circle array use the display function
}