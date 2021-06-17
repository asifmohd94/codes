export function overTheRoad(address: number, n: number): number {
    let even = [];
    let odd = [];
    let evn = 2, od = n * 2 - 1, ans = 0;
    for (let i = 0; i < n; i++) {
        even.push(evn);
        odd.push(od);
        evn += 2;
        od -= 2;
    }
    if (address % 2 == 0) {
        for (let i = 0; i < n; i++) {
            if (even[i] == address) {
                ans = odd[i];
            }
        }
    } else {
        for (let i = 0; i < n; i++) {
            if (odd[i] == address) {
                ans = even[i];
            }
        }
    }
    return ans;
}

console.log(overTheRoad(4,5));