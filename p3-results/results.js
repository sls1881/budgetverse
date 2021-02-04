//get dom elements
import { labelArray, spentArray, budgetArray } from '../mungeUtils.js';
import { getExpenses, getUser } from '../localStorage.js';
import { percentMaker, adviceGenerator } from './functions.js';
import { message } from './adviceMessages.js';

//call functions
const expenseItem = getExpenses();
const userItem = getUser();
const adviceDisplay = document.getElementById('advice-result');

// const percent = percentMaker(userItem, expenseItem);

// ////text content and temporal literals for displaying advice
// //Gas messages
// const gasResult = adviceGenerator(percent);

// const adviceMessageGas = gasMessages[gasResult];

// const adviceGas = `You spent ${expenseItem.gas} on gas. ${adviceMessageGas}`;

// //Utilities message
// const utilitiesResult = adviceGenerator(percent);

// const adviceMessageUtils = utilitiesMessages[utilitiesResult];

// const adviceUtils = `You spent ${expenseItem.utilities} on utilities. ${adviceMessageUtils}`;

// // Other messages
// // const otherResult = adviceGenerator(percent);
// // const adviceMessage = otherMessages[otherResult];
// // const adviceOther = `You spent ${expenseItem.other} on other. ${adviceMessage}`;

// // adviceDisplay.textContent = `Hey, ${userItem.name} ${adviceGas} ${adviceUtils} ${adviceOther}`;

for (let property in expenseItem) {
    const booger = property;
    const spent = expenseItem[booger];
    const budget = userItem.expenses[booger];
    const percent = percentMaker(budget, spent);
    const result = adviceGenerator(percent);
    if (booger === 'house' || booger === 'groceries' || booger === 'savings') {
        adviceDisplay.textContent += '';
    } else {
        adviceDisplay.textContent += `${booger.charAt(0).toUpperCase() + booger.slice(1)}: ${message(result, booger)} `;
    }
}

// Use conditional to set message values(results.js in adventure)
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { // eslint-disable-line

    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: labelArray(expenseItem),
        datasets: [{
            label: 'Actual',
            backgroundColor: 'hsla(205, 38%, 40%, 1)',
            borderColor: 'white',
            data: spentArray(expenseItem)
        },
        {
            label: 'Budget',
            backgroundColor: 'hsla(108, 24%, 48%, 1)',
            borderColor: 'white',
            data: budgetArray(userItem.expenses)
        },
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Budget Spending',
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    min: 0,
                }

            }],

            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    fontSize: 20,
                    fontColor: 'rgb(73, 72, 72)'

                },
                stacked: true
            }],
        }
    }
});