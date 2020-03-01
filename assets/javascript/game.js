$(document).ready(function () {
    console.log("ready!");

    var guessCount = 0;
    var wrongGuess = "";
    var randomWord = "";
    var wordArray = [];
    var gameWords = [
        "avuncular", "defenestrate", "widdershins", "paraprosdokian", "schadenfreude", "hubris", "quixotic"
    ];
    var hashes = [];
    var winsCount = 0;
    var lossesCount = 0; 
    var gameOver = false;

    function init() {
        guessCount = 0;
        wrongGuess = "";
        randomWord = "";
        wordArray = [];
        hashes = [];
        gameOver = false;
        $("#discardedLetter").text("Process of elimination!");
        $("#guessCount").text("You have 12 guesses!");
        $("#result").empty();
        console.log("game over state: " + gameOver);
    };
    init();

    function pickWord() {
        var index = Math.floor(Math.random() * gameWords.length);
        randomWord = gameWords[index];
        hashes = [];
        console.log("random word picked out of the random word array: ", randomWord);

        //this for loop is making the hashes for the letters in the word dynamically 
        for (let i = 0; i < randomWord.length; i++) {
            hashes.push("_");
            wordArray.push(randomWord[i]);
        }
        console.log("hashes in pickWord - ", hashes, wordArray)
        $("#newWord").text(hashes.join(' '));

    }
    pickWord()
    //don't change pickword - 



    //re-initialize all of the other elements before calling pickword
    $("#reset").on("click", function () {
        console.log("You pressed reset!");
        init();
        pickWord();
    })

    //when reset button is pressed, call this function - call pickWord another time, and then the initializations
    //only make button visible when the game is over - $().hide and $().show
    //clear out the discarded 

    function checkWord() {

        var matches = true;

        for (let i = 0; i < hashes.length; i++) {
            if (hashes[i] !== wordArray[i]) {
                matches = false;
            }
        }
        if (matches) {
            gameOver = true;
            winsCount++
            $("#result").text("You guessed it! Play again?");
            $("#scoreWins").text("Wins: " + winsCount);
            console.log("Wins: ", winsCount, gameOver);
        }

    }

    document.onkeyup = function (detectKey) {
        var userGuess = detectKey.key.toLowerCase();
        var userKey = event.keyCode;

        console.log("what is user guess: ", userGuess);
        if (gameOver === true){
            return;
        }

        if ((userKey > 64 && userKey < 91) || (userKey > 96 && userKey < 123)) {
            if (randomWord.indexOf(userGuess) > -1) {
                //this is checking if guess is right
                for (let i = 0; i < randomWord.length; i++) {
                    if (userGuess === randomWord[i]) {
                        hashes[i] = userGuess;
                    }
                }
            }

            //checks on each correct guess if this is the game word 
            var indexInWord = randomWord.indexOf(userGuess);
            if (indexInWord > -1) {

                hashes[indexInWord] = userGuess;
                $("#newWord").text(hashes.join(' '));
                checkWord();

            } else {
                guessCount++;
                wrongGuess += userGuess + ' ';
                console.log(wrongGuess);

                $("#discardedLetter").text("Discarded letters: " + wrongGuess);

                var guessesLeft = 12 - guessCount;
                $("#guessCount").text("You have this many guesses left: " + guessesLeft);
                console.log("This is the guess count: " + guessCount);
                console.log("This is guesses left: " + guessesLeft);
                if (guessesLeft === 0) {
                    $("#guessCount").text("Out of guesses!")
                    lossesCount++
                    $("#scoreLosses").text("Losses: " + lossesCount);
                    console.log("Losses: ", lossesCount);
                    gameOver = true;
                }
            }
        }
    }
})

