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

export function getExpenses() {
    let expenses = JSON.parse(localStorage.getItem(EXPENSES));

    if (!expenses) {
        expenses = {
            gas: 0,
            groceries: 0,
            rentMortgage: 0,
            utilities: 0,
            other: 0,
        };
        localStorage.setItem(EXPENSES, JSON.stringify(expenses));
    }
    return expenses;
}

export function setUser(USER) {
    const stringyUser = JSON.stringify(USER);

    localStorage.setItem(USER, stringyUser);
}

export function setExpenses(EXPENSES) {
    const stringyExpense = JSON.stringify(EXPENSES);

    localStorage.setItem(EXPENSES, stringyExpense);
}



// export function clearUser() {
//     const stringyDefaultUser = JSON.stringify(defaultEmptyUser);

//     localStorage.setItem(USER, stringyDefaultUser);
// }

//setUser function
//formData for p2