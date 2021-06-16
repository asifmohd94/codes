export function gordon(a: string): string {
    a = a.toUpperCase();
    let arr = a.split("");
    let str = "";
    for (let i of arr) {
        if (i == 'a' || i == 'A') {
            str += '@';
        } else if (i == 'e' || i == 'i' || i == 'o' || i == 'u' || i == 'E' || i == 'O' || i == 'I' || i == 'U') {
            str += '*';
        } else if (i == " ") {
            str = str + '!!!! ';
        }
        else {
            str = str + i;
        }
    }
    return str + '!!!!';
}