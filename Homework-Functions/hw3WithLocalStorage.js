
let clickBtn = document.getElementById('btn');

clickBtn.addEventListener('click', function () {
    let moneyOntheBankAccount = 50000;
    let requestedAmount;
    // if (localStorage.getItem('amount')) {
    //     let amountInLocalStorage = localStorage.getItem('amount');
    //     requestedAmount = parseInt(amountInLocalStorage);
    // }
    // else {
    requestedAmount = parseInt(prompt("Please enter the wanted amount of money!"));
    //} SAMO EDNASH DA SE IZVRSHI ZA DA SE ZAPISHE NESHTO VO LOCAL STORAGE I POSLE NA OVA DA MU SE TRGNE KOMENTAROT!
    localStorage.setItem('amount', requestedAmount);
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


})


