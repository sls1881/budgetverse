//magic string
const USER = 'USER';

defaultEmptyUser = [];

//getUser function

export function getUser() {
    const stringyUser = localStorage.getItem(USER);

    if (stringyUser) {
        const parsedUser = JSON.parse(stringyUser);

        return parsedUser;
    } else {
        const stringyDefaultUser = JSON.stringify(defaultEmptyUser);
        localStorage.setItem(USER, stringyDefaultUser);

        return defaultEmptyUser;
    }
}

export function clearUser() {
    const stringyDefaultUser = JSON.stringify(defaultEmptyUser);

    localStorage.setItem(USER, stringyDefaultUser);
}

//setUser function
export function setUser(USER) {
    const stringyUser = JSON.stringify(USER);

    localStorage.setItem(USER, stringyUser);
}


//formData for p1

//formData for p2