//magic string
const USER = 'USER';

// defaultEmptyUser = [];
//getUser function

export function getUser() {
    let user = JSON.parse(localStorage.getItem(USER));

    if (!user) {
        user = [];
        localStorage.setItem(USER, JSON.stringify('user'));
    }
    return user;
}


// export function clearUser() {
//     const stringyDefaultUser = JSON.stringify(defaultEmptyUser);

//     localStorage.setItem(USER, stringyDefaultUser);
// }

//setUser function
export function setUser(USER) {
    const stringyUser = JSON.stringify(USER);

    localStorage.setItem(USER, stringyUser);
}


//formData for p1

//formData for p2