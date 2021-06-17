export function fakeBin(x: []): string {
    let ans = '';
    for (let i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            ans += 0
        } else if (x[i] >= 5) {
            ans += 1
        }
    }
    return ans;
}