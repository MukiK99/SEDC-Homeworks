function arrayToString(array) {
    let sentence = '';
    
    for (i = 0; i < array.length; i++) {
        sentence = sentence + array[i] + " ";
    }
    return sentence;
}




let arr = ["Hello", "there", "students", "of", "SEDC", "!"];
let result1 = arrayToString(arr);
console.log(result1);
alert(result1);
