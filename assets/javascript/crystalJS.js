$(document).ready(function() {

// win/loss counters
var wins = 0;
var losses = 0;

// target number to reach (19-101)
var targetNumber = Math.floor(Math.random() * 101) + 19;
$("#computerNum").html(targetNumber);

// crystals that hold random # (1-12)
var crystal1 = Math.floor(Math.random() *12) + 1;
var crystal2 = Math.floor(Math.random() *12) + 1;
var crystal3 = Math.floor(Math.random() *12) + 1;
var crystal4 = Math.floor(Math.random() *12) + 1;

// var to hold user score
var score = 0;

// on crystal click, add numbers to score and update text
$("#crystal-1").on('click', function() {
  score = score + crystal1;
  $("#userScore").text(score);
  winCheckr();
})

$("#crystal-2").on('click', function() {
  score = score + crystal2;
  $("#userScore").text(score);
  winCheckr();
})

$("#crystal-3").on('click', function() {
  score = score + crystal3;
  $("#userScore").text(score);
  winCheckr();
})

$("#crystal-4").on('click', function() {
  score = score + crystal4;
  $("#userScore").text(score);
  winCheckr();
})

// function to alert user if won/lost
function winCheckr() {
  if (score === targetNumber) {
    wins++;
    alert("YOU WIN!");
    $("#Wins").text(wins);
    resetGame();
  } else if (score > targetNumber) {
    losses++;
    $("#Losses").text(losses);
    resetGame();
  }
}

// function to reset game after win/loss
function resetGame() {
  crystal1 = Math.floor(Math.random() *12) + 1;
  crystal2 = Math.floor(Math.random() *12) + 1;
  crystal3 = Math.floor(Math.random() *12) + 1;
  crystal4 = Math.floor(Math.random() *12) + 1;
  score = 0;
  $("#userScore").text(score);
  targetNumber = Math.floor(Math.random() * 101) + 19;;
  $("#computerNum").html(targetNumber);
}


}); 

/*------------- activity 12 in jquery -------------*/

// var counter = 0;

//   // We begin by expanding our array to include four options.
//   var numberOptions = [10, 5, 3, 7];

//   // Next we create a for loop to create crystals for every numberOption.
//   for (var i = 0; i < numberOptions.length; i++) {

//     // For each iteration, we will create an imageCrystal
//     var imageCrystal = $("<img>");

//     // First each crystal will be given the class ".crystal-image".
//     // This will allow the CSS to take effect.
//     imageCrystal.addClass("crystal-image");

//     // Each imageCrystal will be given a src link to the crystal image
//     imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//     // Each imageCrystal will be given a data attribute called data-crystalValue.
//     // This data attribute will be set equal to the array value.
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//     $("#crystals").append(imageCrystal);
//   }

//   // This time, our click event applies to every single crystal on the page. Not just one.
//   $(".crystal-image").on("click", function() {

//     // Determining the crystal's value requires us to extract the value from the data attribute.
//     // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//     // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//     // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     // We then add the crystalValue to the user's "counter" which is a global variable.
//     // Every click, from every crystal adds to the global counter.
//     counter += crystalValue;

//     // All of the same game win-lose logic applies. So the rest remains unchanged.
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }

//     else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }

//   });