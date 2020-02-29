$(document).ready(function () {
    console.log("ready!");
    //on keyup log add element to the page 

    var guessCount = 0;
    var wrongGuess = "";

    document.onkeyup = function (detectKey) {
        var userGuess = detectKey.key.toLowerCase();
        var userKey = event.keyCode;
        console.log(userGuess);

        if ((userKey > 64 && userKey < 91) || (userKey > 96 && userKey < 123)) {

            //if else for the word itself - 
            if (userGuess === "p") {
                $(".pGuess").text("p");

            } else if (userGuess === "a") {
                $(".aGuess").text("a");

            } else if (userGuess === "r") {
                $(".rGuess").text("r");

            } else if (userGuess === "o") {
                $(".oGuess").text("o");

            } else if (userGuess === "s") {
                $(".sGuess").text("s");

            } else if (userGuess === "d") {
                $(".dGuess").text("d");

            } else if (userGuess === "k") {
                $(".kGuess").text("k");

            } else if (userGuess === "i") {
                $(".iGuess").text("i");

            } else if (userGuess === "n") {
                $(".nGuess").text("n");

            } else if (userGuess !== "p" || userGuess !== "a" || userGuess !== "r" || userGuess !== "o" || userGuess !== "s" || userGuess !== "d" || userGuess !== "k" || userGuess !== "i" || userGuess !== "n") {
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
            };

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

