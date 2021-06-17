export function adjacentElementsProduct(array: []) {
    let ans = -700000000;
    for (let i = 0; i < array.length - 1; i++) {
        ans = Math.max(array[i] * array[i + 1], ans);
    }
    return ans
}