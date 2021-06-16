export function highAndLow(numbers: string): string {
    let max = -Infinity;
    let min = Infinity;
    let arr = numbers.split(" ");
    for (let i of arr) {
        let conv = parseInt(i);
        if (conv < min) {
            min = conv;
        } if (conv > max) {
            max = conv;
        }
    }
    return max + " " + min
}