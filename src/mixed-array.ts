export function sumMix(x: any[]): number {
    let sum: number = 0;
    for (let i = 0; i < x.length; i++) {
        if (typeof (x[i]) == "string") {
            let abc = +x[i];
            sum = sum + abc;
            console.log(sum, typeof (abc))
        } else {
            sum += x[i];
        }
    }
    return sum;
}