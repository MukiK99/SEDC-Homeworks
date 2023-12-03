function SimplePriceCalculator(numberOfPhones) {

    let priceForEach = 119.95;
    let taxRate = 5;
    let finalResult = numberOfPhones * (priceForEach + (priceForEach * taxRate / 100));
    return finalResult;
}

let result = SimplePriceCalculator(30);
console.log("The final result is", result);

//Another way

function AnotherPriceCalculator() {

    let numberOfPhones = parseInt(prompt('Vnesete broj na telefoni'));
    let priceForEach = 119.95;
    let taxRate = 5;
    let finalResult = numberOfPhones * (priceForEach + (priceForEach * taxRate / 100));
    return finalResult;
}

let anotherResult = AnotherPriceCalculator(); 30

console.log("The final result is", anotherResult);
