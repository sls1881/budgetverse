// import functions and grab DOM elements
// initialize state
// set event listeners to update state and DOM
//import from localstorage.js
import { setUser } from '../localStorage.js';

//grab button element 
const button = document.getElementById('p1-button');
const form = document.querySelector('form');

// Button Event Listener
//  Turn monthly expenses into array
//  Add up all the monthly expenses(gas, groceries, eating out, other)
//  Take in form data for username, monthly income, monthly expenses, monthly savings and turn into an array
//  refer to localstorage.js and convert to string for local storage(setuser)
//  Send to p2

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new FormData(form);

    const userProfile = {
        name: formData.get('name'),
        income: formData.get('income'),
        savings: formData.get('savings'),
        expenses: {
            gas: formData.get('gas'),
            groceries: formData.get('groceries'),
            rentMortgage: formData.get('rent-mortgage'),
            utilities: formData.get('utilities'),
            other: formData.get('other'),
        },
    };

    setUser(userProfile);
    window.location = '../p2';
});