let yearOfBirth = parseInt(prompt("Please enter some year of birth"));
if (isNaN(yearOfBirth)) {
    alert("Please enter proper number value!");
}
if (yearOfBirth < 0) {
    alert("Please enter positive value!");
}
let zodiacFormulaRemainder = ((yearOfBirth - 4) % 12);
console.log("The remainder is:", zodiacFormulaRemainder);

if (zodiacFormulaRemainder == 0) {
    alert("You are Rat in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 1) {
    alert("You are Ox in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 2) {
    alert("You are Tiger in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 3) {
    alert("You are Rabbit in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 4) {
    alert("You are Dragon in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 5) {
    alert("You are Snake in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 6) {
    alert("You are Horse in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 7) {
    alert("You are Goat in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 8) {
    alert("You are Monkey in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 9) {
    alert("You are Rooster in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 10) {
    alert("You are Dog in Chinese Zodiac");
}
else if (zodiacFormulaRemainder == 11) {
    alert("You are Pig in Chinese Zodiac");
}