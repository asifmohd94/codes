export function isSameLanguage(list: any[]): boolean {
    let ans = list[0].language;
    let bol = true
    for (let i = 0; i < list.length; i++) {
        if (list[i].language !== ans) {
            bol = false;
        }
    }
    return bol;
}