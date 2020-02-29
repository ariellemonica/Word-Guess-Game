$(document).ready(function () {
    console.log("ready!");
    //on keyup log add element to the page 

    var guessCount = 0;
    var wrongGuess = "";
    var randomWord = "";
    var wordArray = [];
    var gameWords = [
        "random", "sonder", "three", "four"
    ];
    var hashes = [];

    function pickWord() {
        var index = Math.floor(Math.random() * gameWords.length);
        randomWord = gameWords[index];
        hashes = [];
        console.log("random word - ", randomWord);
        //this for loop is making the hashes for the letters in the word dynamically 
        for (let i = 0; i < randomWord.length; i++) {
            hashes.push("_");
            wordArray.push(randomWord[i]);
        }
        console.log("hashes in pickWord - ", hashes, wordArray)
        $("#newWord").text(hashes);

    }

    //re-initialize all of the other elements before calling pickword
    
    pickWord()
    //don't change pickword - 
    //when reset button is pressed, call this function - call pickWord another time, and then the initializations
    //only make button visible when the game is over - $().hide and $().show

    //clear out the discarded 
    //and somewhere in here, get rid of commas


    var rightGuess = "";

    function checkWord() {

        var matches = true;

        for (let i = 0; i < hashes.length; i++) {
            if (hashes[i] !== wordArray[i]) {
                matches = false;
            }
        }
        if (matches) {
            $("#result").text("You win! :)");
        }

    }

    document.onkeyup = function (detectKey) {
        var userGuess = detectKey.key.toLowerCase();
        var userKey = event.keyCode;

        console.log("what is user guess: ", userGuess);

        if ((userKey > 64 && userKey < 91) || (userKey > 96 && userKey < 123)) {
            var indexInWord = randomWord.indexOf(userGuess);
            console.log("index", indexInWord)
            //checks if userGuess letter is within the game word 
            if (indexInWord > -1) {
                hashes[indexInWord] = userGuess;
                // for (let i = 0; i < hashes.length; i++) {
                //     if (i === indexInWord) {
                //         hashes[i] = userGuess;
                //     } else {
                //         hashes[i] = hashes[i]
                //     }
                // }
                $("#newWord").text(hashes);
                console.log("hashes - ", hashes)
                checkWord();

            } else {
                guessCount++;
                wrongGuess += userGuess + " ";
                console.log(wrongGuess);
                $("#discardedLetter").text("wrongGuess: " + wrongGuess);

                // $("#guessCount").text("Incorrect guesses: " + guessCount);
                var guessesLeft = 12 - guessCount;
                $("#guessCount").text("You have this many guesses left: " + guessesLeft);
                console.log("This is the guess count: " + guessCount);
                console.log("This is guesses left: " + guessesLeft);
                if (guessesLeft === 0) {
                    $(".wordContainer").text("Out of guesses!")
                }
            }

        }
        //if the user guesses a letter in the the word, reveal the letters in the word
        //let's append it to the element with the class of that letter 

    }
    //if the user has already picked an incorrect letter, tell them they've already guessed it?

    // the word is "paraprosdokian"
    // definition: (noun) a figure of speech in which the end of the sentence is surprising, or causes the reader to reinterpret the first part
    // examples:
    // Albert Einstein: “The difference between stupidity and genius is that genius has its limits.
    // Douglas Adams: "Trin Tragula – for that was his name – was a dreamer, a thinker, a speculative philosopher or, as his wife would have it, an idiot…"
    // Unattributed: "The last thing I want to do is hurt you. But it’s still on the list."
























})

