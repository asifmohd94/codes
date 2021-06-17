function colorOf(r: number, g: number, b: number): string {
    var ans = "#"
    var red = r.toString(16);
    if (red.length < 2) red = "0" + red;
    ans = ans + red;
    red = g.toString(16);
    if (red.length < 2) red = "0" + red;
    ans = ans + red;
    red = b.toString(16);
    if (red.length < 2) red = "0" + red;
    ans = ans + red;
    return ans;
}