//get dom elements
import { labelArray, spentArray, budgetArray } from '../mungeUtils.js';
import { getExpenses, getUser } from '../localStorage.js';

//call functions
const expenseItem = getExpenses();
const userItem = getUser();
const labels = budgetArray(userItem.expenses);
console.log(labels);
console.log(spentArray(expenseItem));


////event listener for button, on click
//window.location redirect to p2

////text content and temporal literals for displaying advice

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
                    max: 100,
                    callback: function (value) {
                        return value + "%"
                    }
                },
                scaleLabel: {
                    display: true,
                    labelString: "Percentage"
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