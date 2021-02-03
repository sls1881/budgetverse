import { getUser, getExpenses, setExpenses } from '../localStorage.js';

const test = QUnit.test;

test('getUser should in the user from localstorage & return a object', (expect) => {

    const testUser = {
        gas: 0,
        groceries: 0,
        house: 0,
        utilities: 0,
        other: 0,
        savings: 0,
    };

    const userString = JSON.stringify(testUser);

    localStorage.setItem('USER', userString);

    const user = getUser();

    expect.deepEqual(user, testUser);
});


test('getExpenses should in the user from localstorage & return a object', (expect) => {

    const testExpenses = {
        gas: 50,
        groceries: 300,
        house: 1000,
        utilities: 100,
        other: 50,
        savings: 900
    };

    setExpenses(testExpenses);

    const expenses = getExpenses();

    expect.deepEqual(expenses, testExpenses);
});

