// Function declaration
function checkAnswer() {
    // Define the correct answer
    var correctAnswer = "4";

    // Retrieve the user's answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // Update feedback for correct answer
        document.getElementById('feedback').textContent = "Correct! Well done.";
    } else {
        // Update feedback for incorrect answer
        document.getElementById('feedback').textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
