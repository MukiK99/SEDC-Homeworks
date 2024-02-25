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
        return await getData(url);
    }
    catch (error) {
        console.log("Error", error.message);
    }
}

const carTable = document.getElementById('carTable');

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


async function ShowTable() {
    let cars = await fetchData('https://raw.githubusercontent.com/MukiK99/SEDC-Homeworks/main/cars.json');
    // console.log(cars);
    printTable(cars);
}
ShowTable();


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
let filteredInputs;

const fetchDataDynamically = async () => {
    const inputs = {
        type: selectType.value,
        brand: selectBrand.value,
        model: modelInput.value,
        doors: numberOfDoorsInput.value ? parseInt(numberOfDoorsInput.value) : undefined,
        color: colorInput.value,
        isNew: newCarCheckbox.checked,
        minHP: minHorsepowerInput.value,
        maxHP: maxHorsepowerInput.value,
    };

    const falsyInputs = {};

    filteredInputs = Object.entries(inputs).reduce((acc, [key, value]) => {
        if (value) acc[key] = value;
        else falsyInputs[key] = value;
        return acc;
    }, {});
    if (!filteredInputs || Object.keys(filteredInputs).length === 0) {
        carTable.style.display = 'none';
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.style.display = 'block';
        errorHeading.innerHTML = "No valid filter criteria provided!";

    }
    else {
        carTable.style.display = 'block';
        let errorHeading = document.getElementById('errorHeading');
        errorHeading.style.display = 'none';
        try {
            const carData = await fetchData('https://raw.githubusercontent.com/MukiK99/SEDC-Homeworks/main/cars.json');
            const filteredCars = filterCars(carData, filteredInputs);
            printTable(filteredCars);
        }
        catch (error) {
            console.log("Error", error.message);
        }
    }

    // console.log(filteredInputs);



}

const filterCars = (carData, filters) => {
    return carData.filter((car) => {
        return Object.entries(filters).every(([key, value]) => {
            if (key === 'minHP') {
                return car.horsepower >= value;
            }
            else if (key === 'maxHP') {
                return car.horsepower <= value;
            }
            else if (typeof value === 'string') {
                return car[key].toLowerCase().includes(value.toLowerCase());
            }
            return car[key] === value;
        });
    });
};


const filterDataButton = document.getElementById('filterData');
filterDataButton.addEventListener('click', async function (e) {
    e.preventDefault();
    fetchDataDynamically();

});

const resetButton = document.getElementById('resetData');
resetButton.addEventListener('click', (e) => {
    e.preventDefault();
    errorHeading.style.display = 'none';
    selectType.value = ""
    selectBrand.value = ""
    modelInput.value = ""
    numberOfDoorsInput.value = ""
    colorInput.value = ""
    newCarCheckbox.checked = false;
    minHorsepowerInput.value = ""
    maxHorsepowerInput.value = "";
    carTable.style.display = 'block';
    ShowTable();
});

