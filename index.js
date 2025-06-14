// Create a random number 1 between 1 and 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

// Get dice1.png - dice6.png
let randomDiceImage = "dice" + randomNumber1 + ".png";

// Get images/dice1.png - images/dice6.png
let randomImageSource = "images/" + randomDiceImage;
// Select first image
let image1 = document.querySelectorAll("img")[0];
// Set the randomSourceImage to image1
image1.setAttribute("src", randomImageSource);

// Create a random number 2 between 1 and 6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

// Display message for winning players

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Mohamed Ali Wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Fatuma Arte Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}


