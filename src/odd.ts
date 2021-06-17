export function oddOrEven(array: number[]) {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    if (sum % 2 == 0) {
        return "even";
    } else {
        return "odd";
    }
}