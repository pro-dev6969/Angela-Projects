
var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPatterns = [];

var gamePattern = [];

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");

    userClickedPatterns.push(userChosenColour);
})
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4) ;

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
    console.log(userClickedPatterns);

}

// $(".btn").addEventListener("click",nextSequence);
function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

$(".btn").click(function f(){
  nextSequence();
});