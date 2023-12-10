function ageCalculator() {

    let age = parseInt(prompt("Please enter some age"));
    let dogAge = age * 7;
    let humanAge = age / 7;
    let arr = [];
    if (isNaN(age)) {
        alert("Please enter valid number");

    }
    else {
        let specifyType = prompt("Enter 'D' if you want human to dog age conversion or 'H' if you want dog to human age conversion!")
        if (specifyType != 'H' && specifyType != 'D') {
            alert("Please correctly specify the type of conversion!")
        }

        else if (specifyType === 'D') {
            alert(`Your dog is ${dogAge} years old!`);
            arr.push(dogAge);
        }
        else if (specifyType === 'H') {
            alert(`The human is ${Math.round(humanAge)} years old!`);
            arr.push(humanAge);
        }

    }

    return arr;


}

let result = ageCalculator();
console.log(`Baranata vrednost e ${result} godini`); // nizata e chisto za tuka da ne bide undefined!
