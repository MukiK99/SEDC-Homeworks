let nameOfTheRecipe = prompt("Write the name of the recipe!");
let NumberOfIngredients = parseInt(prompt("How many ingredients do you need?"))
if (isNaN(NumberOfIngredients)) {
    alert("Please enter correct number of ingredients");
}

let arrayOne = [];
for (let i = 0; i < NumberOfIngredients; i++) {
    let ingredient = prompt("Write the ingredient!")
    arrayOne.push(ingredient);
}

let recipeContainer = document.getElementById('recipeContainer');

let table = document.getElementById('table');
table.style.border = '1px solid black';
table.style.textAlign = 'center';
table.style.fontFamily = 'Arial, sans serif';
table.style.padding = '10px';
table.style.marginLeft = 'auto';
table.style.marginRight = 'auto';

function printIngredients(array, element) {

    let recipeHeading = document.getElementById('nameOfTheRecipe');
    recipeHeading.innerHTML = nameOfTheRecipe;
    element.innerHTML = "";
    element.innerHTML += "<tr>Recipe ingredients are:";
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `<td>${array[i]}</td>`;
        element.style.listStyle = 'none';
    }
    element.innerHTML += "</tr>";
}

printIngredients(arrayOne, recipeContainer);