let btn = document.getElementById('btn');
let container = document.getElementById('container');


function createTable() {
    let rows = document.getElementById('rows').value;
    let columns = document.getElementById('columns').value;

    let table = '<table border="1">';

    for (let i = 1; i <= rows; i++) {
        table += `<tr>`;

        for (let j = 1; j <= columns; j++) {
            table += `<td>Row-${i} Column-${j}</td>`;
        }
        table += '</tr>';
    }
    table += '</table>';
    container.innerHTML += table;
    
}

btn.addEventListener('click', createTable);