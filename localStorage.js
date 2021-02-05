//magic string
const USER = 'USER';
const EXPENSES = 'EXPENSES';

//gets user data from the local storage
export function getUser() {
    let user = JSON.parse(localStorage.getItem(USER));

    if (!user) {
        user = [];
        localStorage.setItem(USER, JSON.stringify(user));
    }
    return user;
}

//gets expenses data from the local storage 
export function getExpenses() {
    const stringyExpense = localStorage.getItem(EXPENSES);

    if (stringyExpense) {
        const parsedExpense = JSON.parse(stringyExpense);

        return parsedExpense;

    } else {
        const stringyDefaultExpense = {
            car: 0,
            food: 0,
            house: 0,
            utilities: 0,
            other: 0,
            savings: 0,
        };

        localStorage.setItem(EXPENSES, JSON.stringify(stringyDefaultExpense));

        return stringyDefaultExpense;
    }
}

//sets user data to the local storage
export function setUser(user) {
    const stringyUser = JSON.stringify(user);

    localStorage.setItem(USER, stringyUser);
}

//sets user expense data to the local storage
export function setExpenses(expenses) {
    const stringyExpense = JSON.stringify(expenses);

    localStorage.setItem(EXPENSES, stringyExpense);
}

export function clearStorage() {
    const stringyDefaultExpense = {
        car: 0,
        food: 0,
        house: 0,
        utilities: 0,
        other: 0,
        savings: 0,
    };

    const clearStorageString = JSON.stringify(stringyDefaultExpense);

    //Save cart to local storage
    localStorage.setItem(EXPENSES, clearStorageString);
}