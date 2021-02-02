

//Create render function for dynamic table rows
export function renderTableRow(userProfile, userExpense) {
    const expenseItem = userExpense;
    const userItem = userProfile;
    const gasBudget = document.getElementById('gas-budget');
    const gasSpent = document.getElementById('gas-spent');
    const gasRemaining = document.getElementById('gas-remaining');

    gasBudget.textContent = userItem.expenses.gas;
    gasSpent.textContent = expenseItem.gas;
    gasRemaining.textContent = Number(userItem.expenses.gas) - Number(expenseItem.gas);
    // Grab tds by ID
    //Update textContent (userProfile.gas)*10

}

//booger

//Write calcTotal function to calculate balance. Call calcTotal *5
// // export function renderTable(cartItem, shoe) {
// //     const quantity = cartItem.quantity;

// //     const tr = document.createElement('tr');

// //     const shoeTd = document.createElement('td');
// //     const quantityTd = document.createElement('td');
// //     const priceTd = document.createElement('td');


// //     shoeTd.textContent = shoe.name;
// //     quantityTd.textContent = quantity;
// //     priceTd.textContent = `$${calcItemTotal(cartItem, shoe)}`;

// //     tr.append(shoeTd, quantityTd, priceTd);


// //     return tr;

// }