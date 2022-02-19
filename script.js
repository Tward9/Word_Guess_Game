var userGuess = document.querySelector("#word");
var win = document.querySelector("#win");

// Generate a random word on start button push
//split random word into individual string    
// Random
var word = "question".split("");
console.log(word);
var blanks = Array(word.length);
for (i = 0; i < blanks.length; i++) {
    blanks[i]="_";
}
console.log(blanks);
userGuess.textContent = blanks;
//Initialize Timeout
//Start or reset Timer on Button Press
// Get letters the user inputs
function keyDown(event){
    event.preventDefault();
    var keyPressed = event.key;
    keyPressed = keyPressed.toLowerCase();
    console.log(keyPressed);
    
    var check = checkLetter(keyPressed, word);
    if (check) {
        var position = checkPlace(keyPressed, word);
        feedback(position, blanks);
    }
    return;
}
var keyPressed = document.addEventListener(`keydown`, keyDown);
function checkLetter(keyPressedInput, word) {
    //loop through word array
    for ( i = 0; i < word.length; i++) {
        if (keyPressedInput === word[i]) {
            return true;
        }
    }
    return false;
    //check guess against each index
}
function checkPlace(keyPressedInput, word) {
    var position = [];
    //loop through word array
    for ( i = 0; i < word.length; i++) {
        if (keyPressedInput === word[i]) {
            position[i] = word[i];
            console.log(position);
        }
    }
    return position;
    //check guess against each index
}
// Check letters against right answer

function feedback(position, blanks) {
    for ( i = 0; i < blanks.length; i++) {
        if ( typeof position[i] === "string") {
            blanks[i]=position[i]
            console.log(blanks);
        }
    }
    userGuess.textContent = blanks;
}


// Fill in letters if correct answer, do nothing otherwise
// If all letters are correct, win

// end timer on win
// If timer runs out, lose
//End Input capture on Timeout
//Display Correct Word
//log player wins or losses
//diesplay win loss
//on click refresh or return to page, win/los persits