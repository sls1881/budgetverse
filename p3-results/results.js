//grabs dom elements
import { labelArray, dataArray } from '../mungeUtils.js';
import { getExpenses, getUser } from '../localStorage.js';
import { percentMaker, adviceGenerator } from './functions.js';
import { message } from './adviceMessages.js';

//call functions
const expenseItem = getExpenses();
const userItem = getUser();
const adviceDisplayCar = document.getElementById('car-advice');
const adviceDisplayOther = document.getElementById('other-advice');
const adviceDisplayUtilities = document.getElementById('utilities-advice');
const adviceDisplaySavings = document.getElementById('savings-advice');


//iterates through properties of expenseItem and outputs advice depending on how much was spent
for (let property in expenseItem) {
    const expenseName = property;
    const spent = expenseItem[expenseName];
    const budget = userItem.expenses[expenseName];
    const percent = percentMaker(budget, spent);
    const result = adviceGenerator(percent);
    if (expenseName === 'house' || expenseName === 'food') {
        adviceDisplayCar.textContent += '';
    } else {
        if (expenseName === 'car') {
            adviceDisplayCar.textContent += `${expenseName.charAt(0).toUpperCase() + expenseName.slice(1)}: ${message(result, expenseName)}`;
        } else if (expenseName === 'other') {
            adviceDisplayOther.textContent += `${expenseName.charAt(0).toUpperCase() + expenseName.slice(1)}: ${message(result, expenseName)}`;
        } else if (expenseName === 'utilities') {
            adviceDisplayUtilities.textContent += `${expenseName.charAt(0).toUpperCase() + expenseName.slice(1)}: ${message(result, expenseName)}`;
        }
        else {
            adviceDisplaySavings.textContent += `${expenseName.charAt(0).toUpperCase() + expenseName.slice(1)}: ${message(result, expenseName)}`;
        }
    }
}

// Use conditionals to set message values
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
            data: dataArray(expenseItem)
        },
        {
            label: 'Budget',
            backgroundColor: 'hsla(108, 24%, 48%, 1)',
            borderColor: 'white',
            data: dataArray(userItem.expenses)
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