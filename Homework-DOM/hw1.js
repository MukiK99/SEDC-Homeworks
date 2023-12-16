let arrayOne = [10, 10, 10, 20, 20, 20];
let arrayTwo = [5, 10, 100, 100, 200, 300, 400];
let listDiv = document.getElementById('list');
let sumSection = document.getElementById('sum');

function printNumbers(array, element) {
    element.innerHTML += "";
    element.innerHTML = "<ul>Lista na broevi od niza:"
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `<li>${i + 1}. ${array[i]}</li>`;
        element.style.listStyle = 'none';
    }
    element.innerHTML += "</ul>"
}

function arrayToString(array) {
    let sentence = '';
    let newSentence;

    for (i = 0; i < array.length; i++) {
        sentence = sentence + "+" + array[i];
        newSentence = sentence.replace("+", "");
    }
    return newSentence;
}

function printSumOfNumbers(array, element) {
    let sum = 0;
    element.innerHTML = "";
    element.innerHTML += "<div>";
    for (let j = 0; j < array.length; j++) {
        sum = sum + array[j];
        element.innerHTML = `<p>Sumata na broevite e: ${arrayToString(array)} = ${sum}; `
    }
    element.innerHTML += "</div>";
}

// console.log(arrayToString(arrayOne));
printNumbers(arrayOne, listDiv);
printSumOfNumbers(arrayOne, sumSection);


