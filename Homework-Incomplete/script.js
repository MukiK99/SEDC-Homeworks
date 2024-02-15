// Basic 
async function getData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    catch (error) {
        console.log("Error", error.message);
    }

}

async function fetchData(url) {
    try {
        let results = await getData(url);
        console.log(results);
        return results;
    }
    catch (error) {
        console.log("Error", error.message);
    }
}

// fetchData('https://raw.githubusercontent.com/MukiK99/SEDC-Homeworks/main/cars.json');
const carTable = document.getElementById('carTable');
printCarButton = document.getElementById('printCarButton');




async function printTable(data) {
    await data;
    carTable.innerHTML = "";

    carTable.innerHTML += `
<thead>
    <tr>
        <th>Type</th>
        <th>Brand</th>
        <th>Model</th>
        <th>Doors</th>
        <th>Gas Type</th>
        <th>Color</th>
        <th>Is New</th>
        <th>Horsepower</th>
    </tr>
</thead>`;
    carTable.innerHTML += "<tbody>"


    for (let result of data) {
        carTable.innerHTML += `
    <tr>
        <td>${result.type}</td>
        <td>${result.brand}</td>
        <td>${result.model}</td>
        <td>${result.doors}</td>
        <td>${result.gasType}</td>
        <td>${result.color}</td>
        <td>${result.isNew}</td>
        <td>${result.horsepower}</td>
    </tr>
`;
    }
    carTable.innerHTML += "</tbody";
}

// printCarButton.addEventListener('click', async function (e) {
//     e.preventDefault();
async function ShowTable(){
    let cars = await fetchData('https://raw.githubusercontent.com/MukiK99/SEDC-Homeworks/main/cars.json');
    // console.log(cars);
    printTable(cars);
}
ShowTable();
    
    // printCarButton.disabled = true;
// })

// Medium

// const selectType = document.getElementById('selectType');
// const selectBrand = document.getElementById('selectBrand');
// const filterDataButton = document.getElementById('filterData');
// filterDataButton.addEventListener('click', async function (e) {
//     e.preventDefault();
//     let selectTypeValue = selectType.value;
//     let selectBrandValue = selectBrand.value;

//     try {
//         let carData = await fetchData('https://raw.githubusercontent.com/MukiK99/SEDC-Homeworks/main/cars.json');
//         let filteredCars;
//         if (selectTypeValue === "" || selectBrandValue === "") {
//             filteredCars = carData
//                 .filter(car => (car.type === selectTypeValue || car.brand === selectBrandValue));
//         }
//         else {
//             filteredCars = carData
//                 .filter(car => (car.type === selectTypeValue && car.brand === selectBrandValue));
//         }

//         console.log(filteredCars);
//         printTable(filteredCars);
//     }
//     catch (error) {
//         console.log("Error:", error.message);
//     }

// })

//Advanced


const selectType = document.getElementById('selectType');
const selectBrand = document.getElementById('selectBrand');
const modelInput = document.getElementById('modelInput');
const numberOfDoorsInput = document.getElementById('numberOfDoorsInput');
const colorInput = document.getElementById('colorInput');
let newCarCheckbox = document.getElementById('carYear');
const minHorsepowerInput = document.getElementById('minHorsepower');
const maxHorsepowerInput = document.getElementById('maxHorsepower');

const filterDataButton = document.getElementById('filterData');
filterDataButton.addEventListener('click', async function (e) {
    e.preventDefault();
    let selectTypeValue = selectType.value;
    let selectBrandValue = selectBrand.value;
    let modelInputValue = modelInput.value;
    let numberOfDoorsInputValue = parseInt(numberOfDoorsInput.value);
    let colorInputValue = colorInput.value;
    let minHorsepowerValue = minHorsepowerInput.value;
    let maxHorsepowerValue = maxHorsepowerInput.value;

    // console.log(selectTypeValue);
    // console.log(selectBrandValue);
    // console.log(modelInputValue);
    // console.log(numberOfDoorsInputValue);
    // console.log(colorInputValue);
    // console.log(minHorsepowerValue);
    // console.log(maxHorsepowerValue);
    // console.log(newCarCheckbox.checked); // true or false
    
    try {
        let carData = await fetchData('https://raw.githubusercontent.com/MukiK99/SEDC-Homeworks/main/cars.json');
        console.log(newCarCheckbox.checked);
        let filteredCars;
        const values = {
            type: selectTypeValue,
            brand: selectBrandValue,
            model: modelInputValue,
            doors: Number.parseInt(numberOfDoorsInputValue),
            color: colorInputValue,
            minHP: minHorsepowerValue,
            maxHP: maxHorsepowerValue,
            isNew: newCarCheckbox.checked
        }

        const isAnythingEmpty = Object.values(values).some(value => value === '' || value === null || value === undefined);

        const filteredArray = Object.values(values).filter(item => item);
        console.log(filteredArray);
        
        // Using reduce to create an object
        const filteredObject = Object.entries(values)
          .filter(([key, value]) => value)
          .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
          }, {});
        
        console.log(filteredObject);
        

        console.log(values)
        console.log(isAnythingEmpty);
        if (selectTypeValue === "" || selectBrandValue === "" || modelInputValue === "" || numberOfDoorsInputValue === "" || colorInputValue === "" || minHorsepowerValue === "" || maxHorsepowerValue === "" ) {
            printTable.innerHTML = "";
            filteredCars = carData
                .filter(car => (car.type === selectTypeValue || car.brand === selectBrandValue || car.model === modelInputValue || car.doors === numberOfDoorsInputValue ||  car.color === colorInputValue || (car.horsepower >= minHorsepowerValue && car.horsepower <= maxHorsepowerValue) ));
        }
        // else {
        //     filteredCars = carData
        //         .filter(car => (car.type === selectTypeValue && car.brand === selectBrandValue && car.model === modelInputValue && car.doors === numberOfDoorsInputValue && car.color === colorInputValue && car.isNew === newCarCheckbox.checked && (car.horsepower >= minHorsepowerValue && car.horsepower <= maxHorsepowerValue) ));
        // }
        // filteredCars = carData
        // .filter(car => (car.type === selectTypeValue || car.brand === selectBrandValue || car.model === modelInputValue || car.doors === numberOfDoorsInputValue || car.color === colorInputValue || (car.horsepower >= minHorsepowerValue && car.horsepower <= maxHorsepowerValue) ));

        console.log(filteredCars);
        printTable(filteredCars);
    }
    catch (error) {
        console.log("Error:", error.message);
    }

})