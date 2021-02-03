// import functions and grab DOM elements
// initialize state
// set event listeners to update state and DOM
//import from localstorage.js
import { setUser } from '../localStorage.js';

//grab form element 
const form = document.querySelector('form');

// Expense form Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const userProfile = {
        name: formData.get('name'),
        income: formData.get('income'),
        expenses: {
            gas: formData.get('gas'),
            groceries: formData.get('groceries'),
            house: formData.get('rent-mortgage'),
            utilities: formData.get('utilities'),
            other: formData.get('other'),
            savings: formData.get('savings'),
        },
    };

    setUser(userProfile);
    window.location = '../p2';
});