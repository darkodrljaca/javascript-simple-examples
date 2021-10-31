
// The example of implicity connecting functions and object.


function totalQuantitySold() {
    let total = 0;
    for(let i = 0; i < this.salesPerMontsIn2020.length; i++) {
        total += this.salesPerMontsIn2020[i];
    }
    return total;
}

function totalIncome() {
    let totalQuantitySold = this.totalQuantitySold();
    let income2020 = totalQuantitySold * this.price;
    console.log(this.product + " - income in 2020: " + income2020.toFixed(2));
}

var jeans = [
    {
        product: "Skinny jeans",
        price: 25.99,
        salesPerMontsIn2020: [
            500, 650, 430, 230,
            540, 655, 420, 210,
            200, 100, 431, 130,
        ],
        totalQuantitySold: totalQuantitySold,
        totalIncome: totalIncome
    },
    {
        product: "Slim jeans",
        price: 27.99,
        salesPerMontsIn2020: [
            100, 350, 230, 130,
            640, 652, 430, 610,
            600, 160, 231, 320,
        ],
        totalQuantitySold: totalQuantitySold,
        totalIncome: totalIncome
    },
    {
        product: "Straight jeans",
        price: 37.99,
        salesPerMontsIn2020: [
            200, 150, 430, 550,
            341, 702, 431, 600,
            604, 120, 432, 420,
        ],
        totalQuantitySold: totalQuantitySold,
        totalIncome: totalIncome
    },
    {
        product: "Regular jeans",
        price: 32.99,
        salesPerMontsIn2020: [
            420, 350, 110, 670,
            291, 402, 411, 602,
            404, 120, 432, 420,
        ],
        totalQuantitySold: totalQuantitySold,
        totalIncome: totalIncome
    }

];


for(let i = 0; i < jeans.length; i++) {
    jeans[i].totalIncome();
}