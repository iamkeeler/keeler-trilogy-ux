// Event Listener waiting for the .onClick event
$('.redBlock').on('click', function() {
    // Setting a variable = to the value in the input field
    var widthValue = $('#widthInput').val();

    // Targeting the "redBlock" class and animating it
    if (widthValue >= 0) {
        $(this).animate({width: widthValue});
    } else {
        alert("The width can't be a negative number.");
    }
});

// Challenges
// 1. Prevent the width from going negative
// 2. Show an alert if width is negative
// 3. Make it so only 1 block is animated

