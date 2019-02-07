const arrayBudget = {
    budget: [1000, 800],
    jan: [1000, 800],
    feb: [1000, 800],
    mar: [1000, 800],
    apr: [1000, 800],
    may: [1000, 800],
    jun: [1000, 800],
    jul: [1000, 800],
    ago: [1000, 800],
    sep: [1000, 800],
    oct: [1000, 800],
    nov: [1000, 800],
    dec: [2000, 800]
};


function AverageExpenses() {

    let x = 0;
    x = (arrayBudget.jan[0] + arrayBudget.feb[0] + arrayBudget.mar[0]
        + arrayBudget.apr[0] + arrayBudget.may[0] + arrayBudget.jun[0]
        + arrayBudget.jul[0] + arrayBudget.ago[0] + arrayBudget.sep[0]
        + arrayBudget.oct[0] + arrayBudget.nov[0] + arrayBudget.dec[0]
    ) / 12;

    return x;
}

console.log(AverageExpenses());