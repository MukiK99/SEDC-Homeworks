function sumMaxandMinNumbers(array) {
    let min = Infinity;
    let max = -Infinity;
    for (i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            return alert("Please enter valid value!");
        }
        else if (array[i] > max) {
            max = array[i];
        }
    }
    for (j = 0; j < array.length; j++) {
        if (isNaN(array[j])) {
            return alert("Please enter valid value!");
        }
        else if (array[j] < min) {
            min = array[j];
        }
    }
    let sum = min + max;
    return sum;
}

let arr = [3, 5, 6, 8, 11];
let result = sumMaxandMinNumbers(arr);
console.log("Sumata e:", result);
alert(`Sumata e: ${result}`);