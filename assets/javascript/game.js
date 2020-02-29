$(document).ready(function () {
    console.log("ready!");
    //on keyup log add element to the page 

    var elPGuess = document.getElementsByClassName("pGuess");
    var elAGuess = document.getElementsByClassName("aGuess");
    var elRGuess = document.getElementsByClassName("rGuess");
    var elOGuess = document.getElementsByClassName("oGuess");
    var elSGuess = document.getElementsByClassName("sGuess");
    var elDGuess = document.getElementsByClassName("dGuess");
    var elKGuess = document.getElementsByClassName("kGuess");
    var elIGuess = document.getElementsByClassName("iGuess");
    var elNGuess = document.getElementsByClassName("nGuess");

    var guessCount = 0;

    document.onkeyup = function (detectKey) {
        var userGuess = detectKey.key;
        console.log(userGuess);


        //if else for the word itself - 
        if (userGuess === "p") {
            var showP = $("<span>");
            showP.text("p");
            $(".pGuess").append(showP);

        } else if (userGuess === "a") {
            var showA = $("<span>");
            showA.text("a");
            $(".aGuess").append(showA);
            
        } else if (userGuess === "r") {
            var showR = $("<span>");
            showR.text("r");
            $(".rGuess").append(showR);

        } else if (userGuess === "o") {
            var showO = $("<span>");
            showO.text("o");
            $(".oGuess").append(showO);

        } else if (userGuess === "s") {
            var showS = $("<span>");
            showS.text("s");
            $(".sGuess").append(showS);

        } else if (userGuess === "d") {
            var showD = $("<span>");
            showD.text("d");
            $(".dGuess").append(showD);

        } else if (userGuess === "k") {
            var showK = $("<span>");
            showK.text("k");
            $(".kGuess").append(showK);

        } else if (userGuess === "i") {
            var showI = $("<span>");
            showI.text("i");
            $(".iGuess").append(showI);

        } else if (userGuess === "n") {
            var showN = $("<span>");
            showN.text("n");
            $(".nGuess").append(showN);

        } else if (userGuess !== "p" || userGuess !== "a" || userGuess !== "r" || userGuess !== "o" || userGuess !== "s" || userGuess !== "d" || userGuess !== "k" || userGuess !== "i" || userGuess !== "n") {
            guessCount++;
            console.log("guessCount = " + guessCount);
        };


        //if the user guesses a letter in the the word, reveal the letters in the word
        //let's append it to the element with the class of that letter 



        //get element by CLASS instead of id
        //and then change the textcontent inside of it to the letter

        //that's not okay









    }

    //if else for the word itself - 

    //if the user guesses a letter in the the word, reveal the letters in the word
    //get element by CLASS instead of id
    //and then change the textcontent inside of it to the letter


    //uptick the number of guesses
    //if the user has already picked an incorrect letter, tell them they've already guessed it?

    // the word is "paraprosdokian"
    // definition: (noun) a figure of speech in which the end of the sentence is surprising, or causes the reader to reinterpret the first part
    // examples:
    // Albert Einstein: “The difference between stupidity and genius is that genius has its limits.
    // Douglas Adams: "Trin Tragula – for that was his name – was a dreamer, a thinker, a speculative philosopher or, as his wife would have it, an idiot…"
    // Unattributed: "The last thing I want to do is hurt you. But it’s still on the list."
























})

