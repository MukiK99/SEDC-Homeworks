let moviesArray = ["Titanic", "GoodFellas", "TheShawshankRedemption", "SavingPrivateRyan", "LawrenceOfArabia", "TheGodfather", "TheDarkKnight", "RaidersOfTheLostArk", "IngloriousBastards", "MillionDollarBaby"];
let movieHints = ["Very famous movie about sinking ship", "Movie about the italian mafia filmed in 1990", "Movie about imprisoned inncoent man based on Stephen King's novel", "Movie about looking for one certain man to bring him home from war", "Movie about brave officer fighting in the Middle East", "Movie about a young man transformation into ruthless mafia boss", "Police lieutenant who wants to dismantle organized crime in the city", "Movie about searching for a very important ship", "Movie about assasination of country's leadership", "Movie with a tragical end for an amateur boxer"];
let cityArray = ["Antananarivo", "Swakopmund", "Casablanca", "Nairobi", "Bengaluru", "Kathmandu", "Jakarta", "Chongqing", "Guangzhou", "Bordeaux"];
let cityHints = ["Located in African island country, center of the MErina Kingdom", "Located in Africa, activity center and capital of the Erongo Region", "African country's chief port, located in North Africa", "Safari capital city of an African country, has its own national park", "Located in India, first city to receive electricity", "Located in Asian country,known for its religious monuments, Mount Everest can be viewed from it", "Largest city in Southeast Asia,embayment of the Java Sea", "Only city in China with a permanent population over 30 million, created in 1997", "Three times capital of China, has its own sky-piercing tower", "World capital of wine"]
let letterButtons = document.getElementsByClassName("button");
let chosenCategoryHeader = document.getElementById("chosenCategory");
let chosenWordContainer = document.getElementById("chosenWordContainer");
let remainingLivesParagraph = document.getElementById("remainingLives");
let hintContainer = document.getElementById("hintContainer");
let hintButton = document.getElementById("hintButton");
let playAgainButton = document.getElementById("playAgainButton");
let resultParagraph = document.getElementById('resultParagraph');
let liveHeartsSpan = document.getElementsByClassName("heart-span");
let randomNumber = Math.floor(Math.random() * 10);
let counter = 0;
let checkValue = 0;
let numberOfLives = 6;
let chosenCategory = prompt("Type CITY if you want to guess cities or MOVIE if you want to guess movies!");

if (chosenCategory === 'CITY' || chosenCategory === 'MOVIE') {



    console.log(randomNumber);

    function randomElement(array) {
        for (let i = 1; i <= array.length; i++) {
            chosenElement = array[randomNumber];
            return chosenElement.toUpperCase().split("");

        }

    }
    let randomElementChosen;

    if (chosenCategory === 'CITY') {
        randomElementChosen = randomElement(cityArray);
        chosenCategoryHeader.innerHTML += 'Cities';
        hintButton.addEventListener('click', function () {
            for (let i = 0; i < cityHints.length; i++) {
                hintContainer.innerHTML = cityHints[randomNumber];
                hintContainer.disabled = true;
            }

        })
    }
    else if (chosenCategory === 'MOVIE') {
        randomElementChosen = randomElement(moviesArray);
        chosenCategoryHeader.innerHTML += 'Movies';
        hintButton.addEventListener('click', function () {
            for (let i = 0; i < movieHints.length; i++) {
                hintContainer.innerHTML = movieHints[randomNumber];
                hintContainer.disabled = true;
            }

        })
    }
    //sekoj pat koga kje go otvoram programot se bira random element!


    function createMainWordContainer(wordContainer) {
        for (let i = 0; i < randomElementChosen.length; i++) {
            let newSpan = document.createElement('span')
            newSpan.innerHTML = '_';
            wordContainer.appendChild(newSpan);
        }
    }

    createMainWordContainer(chosenWordContainer);

    for (let i = 0; i < letterButtons.length; i++) {
        letterButtons[i].addEventListener('click', function (e) {
            letterButtons[i].style.color = "white";
            letterButtons[i].style.backgroundColor = "blue";
            let letterValue = e.target.value.toUpperCase();
            let isTrue;
            // console.log(letterValue);
            let chosenWordContainerChildren = chosenWordContainer.children;
            // console.log(chosenWordContainerChildren.length);
            for (let i = 0; i < randomElementChosen.length; i++) {
                let index = i;
                if (letterValue === randomElementChosen[i]) {
                    chosenWordContainerChildren[index].innerHTML = letterValue;
                    isTrue = true;
                    checkValue++;
                    console.log("Check value is", checkValue);

                }

            }
            if (!isTrue) {
                counter++;
                numberOfLives--;
                // console.log("Counter is", counter);
                // console.log(numberOfLives);
                for(let k = 1; k <= liveHeartsSpan.length; k++){
                    liveHeartsSpan[numberOfLives].style.display = 'none';
                }
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
    if (counter < 6 && checkValue != randomElementChosen.length) {
        resultParagraph.innerHTML = "Keep playing! Do not forget the hint button if you are not sure about the answer!";
    }
    if (checkValue === randomElementChosen.length) {
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




}
else {
    alert("Wrong answer.Try Again!");
    location.reload();
}


