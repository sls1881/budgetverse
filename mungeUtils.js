//make label array
export function labelArray(userItem) {
    const label = [];
    for (const property in userItem) {
        label.push(property.charAt(0).toUpperCase() + property.slice(1));
    }
    return label;
}

//generates data for p3 chart
export function dataArray(userItem) {
    const label = [];
    for (const property in userItem) {
        label.push(userItem[property]);
    }
    return label;
}
