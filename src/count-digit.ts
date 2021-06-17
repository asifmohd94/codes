export function nbDig(n: number, d: string): number {
    let res = 0;
    for (let g = 0; g <= n; g++) {
        var square = (g * g + "").split("");
        square.forEach((s) => s == d ? res++ : null)
    }
    return res;
}