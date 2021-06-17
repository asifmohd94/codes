export function divisors(n: number) {
    let i: number = 1;
    let count: number = 0;
    while (i <= n) {
        if (n % i == 0) {
            count++;
        }
        i++;
    }
    return count;
}