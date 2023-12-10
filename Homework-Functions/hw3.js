function atmCashRequester(moneyOntheBankAccount) {
    let requestedAmount = parseInt(prompt("Please enter the wanted amount of money!"));
    let moneyLeftOnTheAccount = moneyOntheBankAccount - requestedAmount;
    if (isNaN(requestedAmount)) {
        alert("Please enter proper amount");
        return;


    }
    if (requestedAmount > 30000) {
        alert("In this country, the maximum amount that can be requested on the ATM in 24 hours is 30000 denars!");
        return;

    }
    if (requestedAmount > moneyOntheBankAccount) {
        alert("The amount you requested is bigger that the actual amount of money you have in your bank account");
        return;

    }
    if (requestedAmount < moneyOntheBankAccount) {
        alert(`The withdrawn amount is ${requestedAmount} denars!`);

        alert(`You have ${moneyLeftOnTheAccount} denars left`);
    }
    return moneyLeftOnTheAccount;
}
// let amount = prompt("Enter the amount you want to have on your bank account!")-With prompt
// let Amount = atmCashRequester(amount);

let Amount = atmCashRequester(31000);
