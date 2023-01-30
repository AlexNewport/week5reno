
//Function declaration
function addPaintAndSupplies(totalCost, callback) {
    let cost = 201;
    while (cost > 200) {
        cost = parseFloat(prompt("Enter the cost for the paint and supplies at a limit of $200:"));
    }

    if (cost > 100) {
        cost *= 1.1;
    }

    let paintElement = document.querySelector(".paint");

    paintElement.innerHTML = `Paint $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return (totalCost + cost);
}

//Arrow Function
const addFurniture = (totalCost, callback) => {
    let cost = 2001;
    while (cost > 2000) {
        cost = parseFloat(prompt("Enter the cost for furniture at a limit of $2000:"));
    }
    
    if (cost < 500) {
        cost *= 0.9;
    }
    
    let furnitureElement = document.querySelector(".furniture");

    furnitureElement.innerHTML = `Furniture $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return (totalCost + cost);
}

//Function expression
const addFloorCoverings = function (totalCost, callback) {
    let cost = 2001;
    while (cost > 2000) {
        cost = parseFloat(prompt("Enter the cost for floor coverings at a limit of $2000:"));
    }
    
    if (cost < 500) {
        cost *= 0.85;
    }
    
    let floorCoveringsElement = document.querySelector(".floorCoverings");

    floorCoveringsElement.innerHTML = `Floor Coverings $ ${cost.toFixed(2)}`;

    callback(totalCost + cost);

    return (totalCost + cost);
}

//Callback function to update total
const updateTotals= (cost) => {
    let totalElement = document.querySelector(".totalCost");
    totalElement.innerHTML = `Total $ ${cost.toFixed(2)}`;
    console.log(totalElement);
}

//Implementation of functions
let totalCost = 0;

totalCost = addPaintAndSupplies(totalCost, updateTotals);

totalCost = addFurniture(totalCost, updateTotals);

addFloorCoverings(totalCost, updateTotals);