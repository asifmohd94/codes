export function firstNonConsecutive(arr: number[]): null | number {
    let num = null;
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] != 1) {
            num = arr[i + 1];
            break;
        }
    }
    return num;
}