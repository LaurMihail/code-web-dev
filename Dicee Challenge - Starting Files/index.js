
// insert button
document.getElementById("myButton").addEventListener("click", function() {
// Code to execute when the button is clicked

// image1
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random 1 - 6

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; // images/dice1.png - dice6.png

var image1 = document.querySelectorAll ("img") [0];

image1.setAttribute ("src", randomImageSource1);

// image2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll ("img") [1] .setAttribute ("src", randomImageSource2);

// title
if (randomNumber1 > randomNumber2) {
    document.querySelector ("h1").innerHTML = "Player1 Wins!"
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector ("h1").innerHTML = "Player2 Wins!"
}

else {
    document.querySelector ("h1").innerHTML = "Draw!"
}
    
  });

