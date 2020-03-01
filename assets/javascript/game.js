$(document).ready(function () {
    console.log("ready!");

    var guessCount = 0;
    var wrongGuess = "";
    var randomWord = "";
    var wordArray = [];
    var gameWords = [
        "avuncular", "defenestrate", "widdershins", "paraprosdokian", "schadenfreude", "hubris", "quixotic"
    ];
    var hint1 = "Hint: this word is an adjective, meaning 'of, or pertaining to, uncles'.";
    var hint2 = "Hint: this word is a somewhat violent verb, famous for having occurred in a historical event in Prague.";
    var hint3 = "Hint: time moves one direction. This word describes how we might move back!";
    var hint4 = "Hint: this word is a noun. This phrase is an example, written by Douglas Adams in 'Hitchhiker's Guide to the Galaxy'. 'Trin Tragula – for that was his name – was a dreamer, a thinker, a speculative philosopher or, as his wife would have it, an idiot...'";
    var hint5 = "Hint: what we feel when we watch other people faceplant.";
    var hint6 = "Hint: pride goeth before the fall.";
    var hint7 = "Hint: this word is an adjective - often used in the context of dreamers and sometimes in the context of windmills.";
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
    };
    init();

    function pickWord() {
        var index = Math.floor(Math.random() * gameWords.length);
        randomWord = gameWords[index];
        hashes = [];

        //this for loop is making the hashes for the letters in the word dynamically 
        for (let i = 0; i < randomWord.length; i++) {
            hashes.push("_");
            wordArray.push(randomWord[i]);
        }
        console.log("for your convenience: " + randomWord);
        $("#newWord").text(hashes.join(' '));

        //push hint text based on what the word is
        if (randomWord === "avuncular") {
            $("#hint").text(hint1);
        } else if (randomWord === "defenestrate") {
            $("#hint").text(hint2);
        } else if (randomWord === "widdershins") {
            $("#hint").text(hint3);
        } else if (randomWord === "paraprosdokian"){
            $("#hint").text(hint4);
        } else if (randomWord === "schadenfreude") {
            $("#hint").text(hint5);
        } else if (randomWord === "hubris") {
            $("#hint").text(hint6);
        } else if (randomWord === "quixotic") {
            $("#hint").text(hint7);
        }
    }
    pickWord()

    //re-initialize all of the other elements before calling pickword
    $("#reset").on("click", function () {
        init();
        pickWord();
    })

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
        }

    }

    document.onkeyup = function (detectKey) {
        var userGuess = detectKey.key.toLowerCase();
        var userKey = event.keyCode;

        console.log("user typed: ", userGuess);
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

                $("#discardedLetter").text("Discarded letters: " + wrongGuess);

                var guessesLeft = 12 - guessCount;
                $("#guessCount").text("You have this many guesses left: " + guessesLeft);
                if (guessesLeft === 0) {
                    $("#guessCount").text("Out of guesses!")
                    lossesCount++
                    $("#scoreLosses").text("Losses: " + lossesCount);
                    gameOver = true;
                }
            }
        }
    }
})

