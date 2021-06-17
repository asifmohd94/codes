export function repeatStr(n: number, s: string): string {
    let str1 = s;
    let ans = "";
    for (let i = 1; i < n; i++) {
        ans += str1;
        s += ans;
        ans = ""
    }


    return s;
}