export const digitize = (n: number): number[] => {
    let arr = [];
    while (n > 0) {
        let rem = n % 10;
        arr.push(rem)
        n = Math.floor(n / 10);
    }
    return arr;
};