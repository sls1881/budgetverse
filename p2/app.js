import { getExpenses, setExpenses, getUser } from '../localStorage.js';
import { renderTableRow } from './render-table.js';
// import { findById } from './utils.js';

const finButton = document.getElementById('fin-button');

const dynamicExpense = getExpenses();
const user = getUser();
renderTableRow(user, dynamicExpense);

// for (let item of dynamicExpense) {
//     const expenses = findById(item.expense, expense);
//     const dom = renderTableRow(item, expenses);

//     tbody.append(dom);
// }

// form button - event listener that ties to the (p3) which reduces the table data so user could see in the chart on p3 / at the end it should also redirect the user to the p3 display 

// form data - like the pokemon example
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    //Create data object from form on p2
    const expenseItem = getExpenses();

    //Pulls the data from the drop-down
    const expense = formData.get('expense');
    const amount = formData.get('amount');

    //compare new expenseItem to current EXPENSE in local storage

    expenseItem[expense] += Number(amount);

    //add new item to existing stored item
    setExpenses(expenseItem);
    //call the render function
    renderTableRow(user, expenseItem);
});

finButton.addEventListener('click', () => {
    window.location = '../p3-results';
});


