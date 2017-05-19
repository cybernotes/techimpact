/*
Favorite Music
Based off Sketch by Dawn C. Hayes
Created by Kayla Serpa
*/
var favmusic = ["Como Dijiste", "I Can Only Imagine", "Al Final", "Who Am I"]; // creates variable that contains an array of phrases
var artists = ["Christine D'Clario", "MercyMe", "Lilly Goodman", "Casting Crowns"]; // creates variable that contains an array of phrases


function setup() {
  createCanvas(1200, 800); //sets canvas size
  background(165, 122, 182); //sets background color
}

function draw() {
  for (i = 0; i < 8; i++) { // for when the variable i is less than 8 add 1 to the variable
    stroke(255); //sets the stroke color
    fill(255); //sets the fill color
    textSize(35); //sets the text size
    text(favmusic[i], i * 100 + 50, i * 100 + 50); //creates and displays the text within the variable array favmusic and adjusting the positon of each of the parts of the array using i
    text(artists[i], i * 100 + 60, i * 100 + 80); //creates and displays the text within the variable array artists and adjusts the position of each of the parts of the array using i
  }
}