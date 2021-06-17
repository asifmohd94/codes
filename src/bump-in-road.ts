export function bump(x: string) {
    let count = 0;
    for (let t of x.split("")) {
        if (t == "n") {
            count++;
        }
    }
    if (count > 15) return "Car Dead";
    return "Woohoo!";
}