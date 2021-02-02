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
        expenses = {};
        localStorage.setItem(EXPENSES, JSON.stringify(expenses));
    }
    return expenses;
}

export function setUser(USER) {
    const stringyUser = JSON.stringify(USER);

    localStorage.setItem(USER, stringyUser);
}


//formData for p1



// export function clearUser() {
//     const stringyDefaultUser = JSON.stringify(defaultEmptyUser);

//     localStorage.setItem(USER, stringyDefaultUser);
// }

//setUser function
//formData for p2