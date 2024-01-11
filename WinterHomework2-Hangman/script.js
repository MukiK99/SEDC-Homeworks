let moviesArray = ["Titanic", "GoodFellas", "TheShawshankRedemption", "SavingPrivateRyan", "LawrenceOfArabia", "TheGodfather", "TheDarkKnight", "RaidersOfTheLostArk", "IngloriousBastards", "MillionDollarBaby"];
let movieHints = ["Very famous movie about sinking ship", "Movie about the italian mafia filmed in 1990", "Movie about imprisoned inncoent man based on Stephen King's novel", "Movie about looking for one certain man to bring him home from war", "Movie about brave officer fighting in the Middle East", "Movie about a young man transformation into ruthless mafia boss", "Police lieutenant who wants to dismantle organized crime in the city", "Movie about searching for a very important ship", "Movie about assasination of country's leadership", "Movie with a tragical end for an amateur boxer"];
let letterButtons = document.getElementsByClassName("button");
let chosenWordContainer = document.getElementById("chosenWordContainer");
let remainingLivesParagraph = document.getElementById("remainingLives");
let hintContainer = document.getElementById("hintContainer");
let hintButton = document.getElementById("hintButton");
let playAgainButton = document.getElementById("playAgainButton");
let resultParagraph = document.getElementById('resultParagraph');
let randomNumber = Math.floor(Math.random() * 10);
let counter = 0;
let checkValue = 0;
let numberOfLives = 6;
console.log(randomNumber);

function randomMovie(array) {
    for (let i = 1; i <= array.length; i++) {
        chosenMovie = array[randomNumber];
        return chosenMovie.toUpperCase().split("");

    }

}

let randomMovieChosen = randomMovie(moviesArray); //sekoj pat koga kje go otvoram programot se bira random film!
console.log(randomMovieChosen);

function createMainWordContainer(wordContainer) {
    for (let i = 0; i < randomMovieChosen.length; i++) {
        let newSpan = document.createElement('span')
        newSpan.innerHTML = '_';
        wordContainer.appendChild(newSpan);
    }
}

createMainWordContainer(chosenWordContainer)
// kreirame tolku span elementi vo chosenWordContainer kolku shto ima elementi nizata od filmot koj shto se ima random padnato!


// function handleClickOnLetterButton(e) {
//     let letterValue = e.target.value.toUpperCase();
//     // console.log(letterValue);
//     let chosenWordContainerChildren = chosenWordContainer.children;
//     // console.log(chosenWordContainerChildren.length);
//     for (let i = 0; i < randomMovieChosen.length; i++) {
//         let index = i;
//         if (letterValue === randomMovieChosen[i]) {
//             chosenWordContainerChildren[index].innerHTML = letterValue;

//        }
//     }
// }


for (let i = 0; i < letterButtons.length; i++) {
    letterButtons[i].addEventListener('click', function (e) {
        letterButtons[i].style.color = "white";
        letterButtons[i].style.backgroundColor = "blue";
        let letterValue = e.target.value.toUpperCase();
        let isTrue;
        // console.log(letterValue);
        let chosenWordContainerChildren = chosenWordContainer.children;
        // console.log(chosenWordContainerChildren.length);
        for (let i = 0; i < randomMovieChosen.length; i++) {
            let index = i;
            if (letterValue === randomMovieChosen[i]) {
                chosenWordContainerChildren[index].innerHTML = letterValue;
                isTrue = true;
                checkValue++;
                console.log("Check value is", checkValue);

            }

        }
        if (!isTrue) {
            counter++;
            numberOfLives--;
            console.log("Counter is", counter);
            console.log(numberOfLives);
            remainingLivesParagraph.innerHTML = `You have ${numberOfLives} lives left`;
            if (numberOfLives === 0) {
                for (let i = 0; i < letterButtons.length; i++) {
                    letterButtons[i].disabled = true;
                }
            }

        }
        if (counter >= 6) {
            resultParagraph.innerHTML = "You lost in this game! Click on Play Again button for a new game";

        }
        if(counter < 6 && checkValue != randomMovieChosen.length){
            resultParagraph.innerHTML = "Keep playing! Do not forget the hint button if you are not sure about the answer!";
        }
        if (checkValue === randomMovieChosen.length) {
            resultParagraph.innerHTML = "Congratulations! You have won this game.Keep working that way!";
            for (let i = 0; i < letterButtons.length; i++) {
                letterButtons[i].disabled = true;
            }

        }


    });
}

playAgainButton.addEventListener('click', function () {
    location.reload();
})

hintButton.addEventListener('click', function () {
    for (let i = 0; i < movieHints.length; i++) {
        hintContainer.innerHTML = movieHints[randomNumber];
        hintContainer.disabled = true;
    }

})





