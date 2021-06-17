function gordon(a: string): string {
    let arr = a.split(" ");
    let ans = "";
    for (let x of arr) {
        let char = x.split("");
        for (let i = 0; i < char.length; i++) {
            if (char[i] == 'a' || char[i] == 'A') {
                char[i] = "@";
            }
            else if (char[i] == 'e' || char[i] == 'i' || char[i] == 'o' || char[i] == 'u') {
                char[i] = "*";
            }

        }
        ans = ans + char.join("").toUpperCase();
        ans = ans + "!!!! ";
    }
    return ans.substr(0, ans.length - 1);
}