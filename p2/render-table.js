

//Create render function for dynamic table rows
export function renderTableRow(userProfile, userExpense) {
    const expenseItem = userExpense;
    const userItem = userProfile;
    console.log(userItem);
    const gasBudget = document.getElementById('gas-budget');
    const gasSpent = document.getElementById('gas-spent');
    const gasRemaining = document.getElementById('gas-remaining');

    gasBudget.textContent = userItem.expenses.gas;
    gasSpent.textContent = expenseItem.gas;
    gasRemaining.textContent = Number(userItem.expenses.gas) - Number(expenseItem.gas);

    const groceriesBudget = document.getElementById('groceries-budget');
    const groceriesSpent = document.getElementById('groceries-spent');
    const groceriesRemaining = document.getElementById('groceries-remaining');
    groceriesBudget.textContent = userItem.expenses.groceries;
    groceriesSpent.textContent = expenseItem.groceries;
    groceriesRemaining.textContent = Number(userItem.expenses.groceries) - Number(expenseItem.groceries);

    const houseBudget = document.getElementById('house-budget');
    const houseSpent = document.getElementById('house-spent');
    const houseRemaining = document.getElementById('house-remaining');
    houseBudget.textContent = userItem.expenses.house;
    houseSpent.textContent = expenseItem.house;
    houseRemaining.textContent = Number(userItem.expenses.house) - Number(expenseItem.house);

    const utilitiesBudget = document.getElementById('utilities-budget');
    const utilitiesSpent = document.getElementById('utilities-spent');
    const utilitiesRemaining = document.getElementById('utilities-remaining');
    utilitiesBudget.textContent = userItem.expenses.utilities;
    utilitiesSpent.textContent = expenseItem.utilities;
    utilitiesRemaining.textContent = Number(userItem.expenses.utilities) - Number(expenseItem.utilities);

    const otherBudget = document.getElementById('other-budget');
    const otherSpent = document.getElementById('other-spent');
    const otherRemaining = document.getElementById('other-remaining');
    otherBudget.textContent = userItem.expenses.other;
    otherSpent.textContent = expenseItem.other;
    otherRemaining.textContent = Number(userItem.expenses.other) - Number(expenseItem.other);

}

