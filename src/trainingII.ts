export function howManySmaller(arr: any[], n: number) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toFixed(2);
    }
    let count = 0;
    for (let x of arr) {
        if (x < n) count++;
    }
    return count;
}