let buttons = document.getElementsByClassName('button');
let clearButton = document.getElementsByClassName("clear-button")[0];
let equalButton = document.getElementById('equalButton');
let deleteButton = document.getElementsByClassName('clear-button')[1];



function handleClickOnButton(e) {
    document.getElementById('resultInput').value += e.target.value;
    // console.log(typeof resultInput.value);/



}

function handleEqualButton(e) {
    let resultInputValue = document.getElementById('resultInput').value;
    if (resultInputValue) {
        let result = calculate(resultInputValue);
        document.getElementById('resultInput').value = result;
    }

}

function handleClearButton() {
    document.getElementById('resultInput').value = "";
}

function deleteLastDigit() {
    let currentInput = document.getElementById("resultInput").value;
    document.getElementById("resultInput").value = currentInput.slice(0, -1);
}





for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleClickOnButton);
}



function calculate(input) {
    let operators = ['*', '/', '+', '-'];
    let characters = input.match(/(\d+(\.\d+)?|[*/+\-])/g);
    console.log(characters);


    let currentOperator = '';
    let currentOperand = 0;


    for (let i = 0; i < characters.length; i++) {
        if (operators.includes(characters[i])) {
            currentOperator = characters[i];
        }
        else {
            let operand = parseFloat(characters[i]);

            switch (currentOperator) {
                case '*':
                    currentOperand *= operand;
                    break;
                case '/':
                    if (operand !== 0) {
                        currentOperand /= operand;
                    } else {
                        alert("Can't divide by zero!");
                        return document.getElementById('resultInput').value = "";
                    }
                    break;
                case '+':
                    currentOperand += operand;
                    break;
                case '-':
                    currentOperand -= operand;
                    break;
                default:
                    currentOperand = operand;
            }

        }
    }

    if (currentOperand < 999999999) {
        return currentOperand.toFixed(3);
    }
    else {
        alert('This number is very large!');
        return document.getElementById('resultInput').value = "";
    }

}


equalButton.addEventListener('click', handleEqualButton);
clearButton.addEventListener('click', handleClearButton);
deleteButton.addEventListener('click', deleteLastDigit);



