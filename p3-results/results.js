//get dom elements
import { labelArray, spentArray, budgetArray } from '../mungeUtils.js';
import { getExpenses, getUser } from '../localStorage.js';
import { percentMaker, adviceGenerator } from './functions.js';
import { gasMessages, utilitiesMessages, otherMessages } from './adviceMessages.js';

//call functions
const expenseItem = getExpenses();
const userItem = getUser();

const percent = percentMaker(userItem, expenseItem);
const adviceDisplay = document.getElementById('advice-result');

////text content and temporal literals for displaying advice
//Gas messages
const gasResult = adviceGenerator(percent);

const adviceMessageGas = gasMessages[gasResult];

const adviceGas = `You spent ${expenseItem.gas} on gas. ${adviceMessageGas}`;

//Utilities message
const utilitiesResult = adviceGenerator(percent);

const adviceMessageUtils = utilitiesMessages[utilitiesResult];

const adviceUtils = `You spent ${expenseItem.utilities} on utilities. ${adviceMessageUtils}`;

//Other messages
const otherResult = adviceGenerator(percent);

const adviceMessage = otherMessages[otherResult];

const adviceOther = `You spent ${expenseItem.other} on other. ${adviceMessage}`;

adviceDisplay.textContent = `Hey, ${userItem.name} ${adviceGas} ${adviceUtils} ${adviceOther}`;

// adviceDisplay.textContent += adviceGas;
// adviceDisplay.textContent += adviceUtils;
// adviceDisplay.textContent += adviceOther;



//Use conditional to set message values(results.js in adventure)
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { // eslint-disable-line

    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: labelArray(expenseItem),
        datasets: [{
            label: 'Spent',
            backgroundColor: 'turquoise',
            borderColor: 'turquoise',
            data: spentArray(expenseItem)
        },
        {
            label: 'Budget',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: budgetArray(userItem.expenses)
        },
        ]
    },
    options: {
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
                    fontColor: 'black'

                },
                stacked: true
            }],
        }
    }
});