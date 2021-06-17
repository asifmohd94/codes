export function getRealFloor(n: number): number {
    let ans = 0;
    if (n < 13 && n >= 1) {
        ans = n - 1;
    } else if (n >= 14) {
        ans = n - 2;
    } else {
        ans = n;
    }
    return ans;
}