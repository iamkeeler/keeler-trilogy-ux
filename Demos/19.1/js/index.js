//Example 1 of variables being used for addition
var x = 20;
var y = 10;
var sum = x + y;
console.log(sum);

//Example 2 of variables being used to contain a string
var a = "Big Kahuna Burger";
console.log(a);

//Example 3 of concatenation using variables to form a sentence
var adj = "fat";
var noun = "dog";
var madlib = "The " + adj + " " + noun + " " + "jumps in the river";
console.log(madlib);

// event listener
$(".button").on("click", function() {
    $(this).toggleClass("blue");
    console.log("Hey a click occurred!");
  });

$("#thisButton").on("click", function(){
    $("#thisButton").html("Hello <b>world</b>!");
});

$("#resetButton").on("click", function(){
    $("#thisButton").html("A Button");
    $("#thisButton").removeClass("blue");
    $("#thisButton").addClass("black");
});

$(".button").on("click")