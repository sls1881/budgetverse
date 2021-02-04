//import from localstorage.js
import { setUser } from '../localStorage.js';

//grab form element 
const form = document.querySelector('form');

// budget form Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    const userProfile = {
        name: formData.get('name'),
        income: formData.get('income'),
        expenses: {
            car: formData.get('car'),
            food: formData.get('food'),
            house: formData.get('rent-mortgage'),
            utilities: formData.get('utilities'),
            other: formData.get('other'),
            savings: formData.get('savings'),
        },
    };

    setUser(userProfile);
    window.location = '../p2';
});