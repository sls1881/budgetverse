//make label array
export function labelArray(userItem) {
    const label = [];
    for (const property in userItem) {
        label.push(property.charAt(0).toUpperCase() + property.slice(1));
    }
    return label;
}
export function spentArray(userItem) {
    const label = [];
    for (const property in userItem) {
        label.push(userItem[property]);
    }
    return label;
}
export function budgetArray(userItem) {
    const label = [];
    for (const property in userItem) {
        label.push(userItem[property]);
    }
    return label;
}

////for loop to push item to array

////const set to an empty array

////return empty array

//make data 1 input array

////for loop to push item to array

////const set to an empty array

////return empty array

//repeat for however many table data items we have