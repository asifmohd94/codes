export function joggers(x, y) {
    let a = Math.max(x, y);
    let b = Math.min(x, y);
    let m = a;
    while (m % b !== 0) {
        m += a;
    }
    m;
    let arr = [];
    arr.push(m / x);
    arr.push(m / y);

    return arr;
}