export function findById(expense, array) {

    for (let item of array) {
        if (item.expense === expense) {
            return item;
        }
    }
}
