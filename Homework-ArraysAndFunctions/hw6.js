function studentFullName(firstName, lastName) {
    let fullName;
    let fullnameArr = [];
    let counter = 0;
    for (let i = 0; i < firstName.length; i++) {
        for (let j = 0; j < lastName.length; j++){
            if(i === j){
            counter++;
            fullName =(counter) + "." + firstName[i] + " " + lastName[j];
            fullnameArr.push(fullName);
            }
            
        }
    }
    return fullnameArr;
}

let first = ["Bob", "Jill","Murat","Ivan","Ivan"];
let last =["Gregory", "Wurtz","Koca","Apostolovski","Jamandilovski"];
let result = studentFullName(first, last);
console.log(result);
// alert(`Rezultatot e: ${result}`);