let numberOfRows = parseInt(prompt('Enter number of rows!'));
let numberOfColumns = parseInt(prompt("Enter number of columns!"));
if (isNaN(numberOfRows) || isNaN(numberOfColumns)) {
    alert("Please enter valid number");
}

let rowArray = new Array(numberOfRows);
let columnArray = new Array(numberOfColumns);
let finalRowArray = [];
let finalColumnArray = [];
// console.log(rowArray,columnArray);
for (let i = 0; i < rowArray.length; i++) {

    finalRowArray.push(i + 1);

}

for (let j = 0; j < columnArray.length; j++) {
    finalColumnArray.push(j + 1);
}

let btn = document.getElementById('btn');

// console.log(finalRowArray); // od Prompt broj pravam niza od tolku elementi kolku shto vnel korisnikot! 
// console.log(finalColumnArray); // Isto i ovde!




let counter = 0; 

btn.addEventListener('click', function(){ // Anonimna funkcija!
    if(counter === 1){
        alert('Dozvoleno e samo ednash da se generira tabela!');
        return;
    }
    let tableContainer = document.getElementById('tableContainer');
    let table = document.createElement("table");
    let tbody = document.createElement("tbody");


    for (let k = 0; k < finalRowArray.length; k++) {
        let row = document.createElement('tr');

        for (let f = 0; f < finalColumnArray.length; f++) {
            let cell = document.createElement('td');
            let cellText = document.createTextNode(`Row-${k+1} Column-${f+1}`)
            cell.appendChild(cellText);
            cell.classList.add('padding');
            cell.classList.add('red');
            row.appendChild(cell);
        }

        tbody.appendChild(row);


    }
    table.appendChild(tbody);
    tableContainer.append(table);
    table.setAttribute('border', '1px');

    counter++;

    
})

// function handleClickOnAButton() {  //so imenuvana funkcija!
   

//     let tableContainer = document.getElementById('tableContainer');
//     let table = document.createElement("table");
//     let tbody = document.createElement("tbody");


//     for (let k = 0; k < finalRowArray.length; k++) {
//         let row = document.createElement('tr');

//         for (let f = 0; f < finalColumnArray.length; f++) {
//             let cell = document.createElement('td');
//             let cellText = document.createTextNode(`Row-${k+1} Column-${f+1}`)
//             cell.appendChild(cellText);
//             cell.classList.add('padding');
//             row.appendChild(cell);
//         }

//         tbody.appendChild(row);


//     }
//     table.appendChild(tbody);
//     tableContainer.append(table);
//     table.setAttribute('border', '1px');
    
   
    




// }
// btn.addEventListener('click', handleClickOnAButton);










