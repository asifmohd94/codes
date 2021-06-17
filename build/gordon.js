"use strict";
function gordon(a) {
    var arr = a.split(" ");
    var ans = "";
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var x = arr_1[_i];
        var char = x.split("");
        for (var i = 0; i < char.length; i++) {
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
