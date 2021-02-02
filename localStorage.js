//magic string
const USER = 'USER';
const EXPENSES = 'EXPENSES';


// defaultEmptyUser = [];
//getUser function
export function getUser() {
    let user = JSON.parse(localStorage.getItem(USER));

    if (!user) {
        user = [];
        localStorage.setItem(USER, JSON.stringify(user));
    }
    return user;
}

// export function getExpenses() {
//     let expenses = JSON.parse(localStorage.getItem(EXPENSES));

//     if (!expenses) {
//         expenses = {
//             gas: 0,
//             groceries: 0,
//             rentMortgage: 0,
//             utilities: 0,
//             other: 0,
//         };
//         localStorage.setItem(EXPENSES, JSON.stringify(expenses));
//     }
//     return expenses;
// }

export function getExpenses() {
    const stringyExpense = localStorage.getItem(EXPENSES);

    if (stringyExpense) {
        const parsedExpense = JSON.parse(stringyExpense);

        return parsedExpense;

    } else {
        const stringyDefaultExpense = {
            gas: 0,
            groceries: 0,
            house: 0,
            utilities: 0,
            other: 0,
        };

        localStorage.setItem(EXPENSES, JSON.stringify(stringyDefaultExpense));

        return stringyDefaultExpense;
    }
}

export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

export function setExpenses(expenses) {
    const stringyExpense = JSON.stringify(expenses);

    localStorage.setItem(EXPENSES, stringyExpense);
}



// export function clearUser() {
//     const stringyDefaultUser = JSON.stringify(defaultEmptyUser);

//     localStorage.setItem(USER, stringyDefaultUser);
// }

//setUser function
//formData for p2