export const reverseSeq = (n: number): number[] => {
    let arr: number[] = [];
    let i: number = n;
    while (i >= 1) {
        arr.push(i);
        i--;
    }
    return arr;
};