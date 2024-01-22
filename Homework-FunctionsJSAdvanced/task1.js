let getResultsButton = document.getElementById('getResults');

let printResults = (data) => {
    let table = document.getElementById('table');
    table.innerHTML = "";

    table.innerHTML += `
        
            <tr>
                <th style="border: 1px solid; padding: 10px; font-size: 28px;">Name</th>
                <th style="border: 1px solid; padding: 10px; font-size: 28px;">Population</th>
                <th style="border: 1px solid; padding: 10px; font-size: 28px;">Climate</th>
                <th style="border: 1px solid; padding: 10px; font-size: 28px;">Gravity</th>
            </tr>
        </thead>`;
        table.innerHTML+= "<tbody>"
    

    for (let result of data) {
        table.innerHTML += `
            <tr>
                <td style="border: 1px solid; padding: 10px;">${result.name}</td>
                <td style="border: 1px solid; padding: 10px;">${result.population}</td>
                <td style="border: 1px solid; padding: 10px;">${result.climate}</td>
                <td style="border: 1px solid; padding: 10px;">${result.gravity}</td>
            </tr>
        `;
    }

    table.innerHTML += "</tbody";
}




let fetchApi = (url) => {
    fetch(url)
        .then(response => response.json())
        .then(data => {

            console.log(data.results);
            printResults(data.results);
        })
        .catch(error => {
            console.log("This is the error:", error);
        })
}



getResultsButton.addEventListener('click', function (e) {
    e.preventDefault();
    fetchApi('https://swapi.dev/api/planets/?page=1');

})
