export function percentMaker(userItem, expenseItem) {

    const itemExpense = expenseItem;
    const itemUser = userItem;
    const percent = itemExpense / itemUser;

    return percent;
}

export function adviceGenerator(percent) {
    if (percent <= 0.1) {
        return 'underSpent';
    }
    else if (percent >= 0.9) {
        return 'overSpent';
    }
    return 'sweetSpot';
}


// const moneyMessage = deadOrAliveMoneyMessages[resultMoney];

// let burgerBuckMessages = null;

// if (resultMoney === 'starved') {
//     burgerBuckMessages = deadHealthMessages;
// } else {
//     burgerBuckMessages = aliveHealthMessages;
// }

// const healthMessage = burgerBuckMessages[resultHealth];

// const results = `${user.name}, after eating at Bob's Burgers ${moneyMessage} ${healthMessage}.`;

// resultMessage.textContent = results;
