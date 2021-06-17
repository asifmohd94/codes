"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alienLanguage = void 0;
function alienLanguage(str) {
    str = str.toUpperCase();
    var arr = str.split(" ");
    var ans = "";
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        str = arr_1[_i];
        var ch = str.split("");
        ch[str.length - 1] = ch[str.length - 1].toLowerCase();
        ans = ans + ch.join("");
        ans = ans + " ";
    }
    return ans.substr(0, ans.length - 1);
}
exports.alienLanguage = alienLanguage;
