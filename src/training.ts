export function mirrorImage(arr: []) {
    let [a, b] = [0, 0];
    if (arr.some((e, i) => {
        if (i < arr.length - 1) {
            a = arr[i];
            b = arr[i + 1];
            return a === parseInt(b.toString().split("").reverse().join(""));
        }
    })) return [a, b];
    else return [-1, -1];
}