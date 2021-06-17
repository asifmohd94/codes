export function cake(x: number, y: string) {
    let res = 0;
    let a = y.split("");

    for (let i = 0; i < a.length; i++) {
        res += i % 2 == 0 ? a[i].charCodeAt(0) : a[i].charCodeAt(0) - 96;
    }
    if (res > x * 0.7) {
        return 'Fire!'
    }
    return 'That was close!';
}