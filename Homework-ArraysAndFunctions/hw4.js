function printNumbers(num1, num2) {

    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0){
            console.log(i + "\n" + "Even");//za da se vidi deka e even number!
        }
        else if(i % 2 != 0) {
            console.log(i + " " + 'Odd'); // za da se vidi deka e odd number!
        }
    }
}

printNumbers(1,20);