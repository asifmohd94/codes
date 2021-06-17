export function alienLanguage(str: string) {
    str = str.toUpperCase();
    var arr = str.split(" ");
    var ans = "";
    for (str of arr) {
        var ch = str.split("");
        ch[str.length - 1] = ch[str.length - 1].toLowerCase();
        ans = ans + ch.join("");
        ans = ans + " ";
    }

    return ans.substr(0, ans.length - 1);
}