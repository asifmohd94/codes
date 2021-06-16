export function findSquares(num: number): string {
    let a = 0, b = 1;

    while (b < 1000000) {
        if ((b * b) - (a * a) == num) {
            break;
        }
        a++;
        b++;
    }
    let ans = `${b * b}-${a * a}`;
    return ans;

};