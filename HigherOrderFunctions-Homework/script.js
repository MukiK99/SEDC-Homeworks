class Product{
    constructor(name,category,hasDiscount,price){
        this.name = name;
        this.category = category;
        this.hasDiscount = hasDiscount;
        this.price = price;
    }
}

let products = [
    new Product("Milka","Food",true,50),
    new Product("Dorina","Food",false,45),
    new Product("Bread","Food",false,33),
    new Product("Milk","Food",true,58),
    new Product("Banana","Food",false,70),
    new Product("Chair","Furniture",false,2500),
    new Product("Sofa","Furniture",true,36000),
    new Product("Kitchen desk","Furniture",true,18000),
    new Product("Bicycle","Transportation",false,30000),
    new Product("E-bike","Transportation",true,80000),
    new Product("Audi","Transportation",false,1500000),
    new Product("Jacket","Clothes",false,1800),
    new Product("Boots","Clothes",false,6000),
    new Product("Pencil","School Item",true,18),
    new Product("Paint Brush","School item",true,16)
    
];
//Task 1-Products with price greater than 20
console.log("========== Task 1 ===================");
let productsWithGreaterPriceThan20 = products
.filter(product => product.price > 20)
.map(product => product.name);
console.log("Products with price greater than 20:",productsWithGreaterPriceThan20);

//Task 2-Products of category Food, that are on discount
console.log("======== Task 2 =========");
let foodProductsonDiscount = products
.filter(product => (product.category === "Food" && product.hasDiscount))
.map(product => product.name);
console.log("Products of category Food, that are on discount:",foodProductsonDiscount);

//Task 3-All products that are on discount
console.log("============ Task 3 =================");
let allProductsOnDiscount = products
.filter(product => product.hasDiscount)
.map(product => product.name);
console.log("All products that are on discount:",allProductsOnDiscount);

// Task 4-All products on discount,with a name that starts with a vowel

console.log("=========== Task 4 =================");
let discountProductsStartingWithAVowel = products
.filter(product => (product.name.startsWith("A") || product.name.startsWith("E") || product.name.startsWith("I") || product.name.startsWith("O") || product.name.startsWith("U") || product.name.startsWith("Y")) && product.hasDiscount)
.map(product => product.name);
console.log("All products on discount,with a name that starts with a vowel:",discountProductsStartingWithAVowel);
