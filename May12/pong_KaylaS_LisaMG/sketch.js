/*
Pong
By Kayla S and Lisa MG
Driver Lisa MG 
Typer Kayla S
*/
var recX = 24;
var recY = 84;
var recCol ;
recCol = 'rgb(44, 214, 240)';
var recSize = 100;
var circX = 300;
var circY = 200;
var circSize = 50;
var circCol 
circCol = 'rgb (187, 240, 44)';
var speed = 5
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background (0);
  noStroke();
  fill(recCol);
  rect(recX, recY, recSize, recSize);
  rect(recX+450, recY + 200, recSize, recSize);
  fill(circCol);
  noStroke();
  ellipse(circX, circY, circSize, circSize);
  
  recY = recY - speed

  circX = circX + speed
  
 if (recY> height || recY < 0) {
   speed = speed * -1;
 }
 if (circX> width || circX <0){
   speed = speed * -1;
 }
   if (mouseIsPressed){
    speed = speed * 0;
}
  /* else{
    speed = speed *-1
    }*/

  
  
}