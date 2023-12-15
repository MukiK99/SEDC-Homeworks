function validateNumbers(array) {
    for (i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            alert("Error message");
            return;
        }
        else {
            return true;
        }
    }



}


function sumOfNumbers(array) {
    let sum = 0;
    if (validateNumbers(array)) {
        for (j = 0; j < array.length; j++){
            sum = sum + array[j];
        }
        return sum;
    }
    
    





}

let arr = [5, 5, 5, 5, 5];
let arr2 = ['abc', 10, 10, 10, 10, 'string'];
let arr3 = [20,20,20,20,20];
result = sumOfNumbers(arr2);
alert(`Sumata e: ${result}`);





























// function sumOfNumbers(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (isNaN(array[i])) {
//             alert("Error message");
//             return false;
//         }
//         else {
//             sum = sum + array[i];
//         }



//     }
//     return sum;


// }










