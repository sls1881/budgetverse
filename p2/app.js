import { getExpenses, setExpenses, getUser, setUser } from '../localStorage.js';
import { renderTableRow } from './render-table.js';

const finButton = document.getElementById('fin-button');

// form button - event listener that ties to the (p3) which reducts the table data so user could see in the chart on p3 / at the end it should also redirect the user to the p3 display 


// form data - like the pokemon example
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    //Create data object from form on p2
    const expenseItem = getExpenses();

    const expense = formData.get('expense');

    const amount = formData.get('amount');

    //compare new expenseItem to current EXPENSE in local storage
    expenseItem.expense += amount;

    //add new item to existing stored item
    setExpenses(expenseItem);

    //call the render function
    renderTableRow();

});

finButton.addEventListener('click', () => {
    window.location = '../p3';
});


// const userProfile = {
//     name: formData.get('name'),
//     income: formData.get('income'),
//     savings: formData.get('savings'),
//     expenses: {
//         gas: formData.get('gas'),
//         groceries: formData.get('groceries'),
//         rentMortgage: formData.get('rent-mortgage'),
//         utilities: formData.get('utilities'),
//         other: formData.get('other'),