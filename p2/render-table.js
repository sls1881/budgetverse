

//Create render function for dynamic table rows
export function renderTableRow(userProfile, userExpense) {
    console.log(userExpense, 'userexpense');
    console.log(userProfile, 'userprofile');

    const tbody = document.getElementById('table');
    const tr = document.createElement('tr');

    const budgetTd = document.createElement('td');
    const expenseTd = document.createElement('td');
    const balanceTd = document.createElement('td');
    const typeTd = document.createElement('td');

    typeTd.textContent

    tr.append(budgetTd, expenseTd, balanceTd, typeTd);
    tbody.append(tr);

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