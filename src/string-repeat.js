"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeatStr = void 0;
function repeatStr(n, s) {
    var str1 = s;
    var ans = "";
    for (var i = 1; i < n; i++) {
        ans += str1;
        s += ans;
        ans = "";
    }
    return s;
}
exports.repeatStr = repeatStr;
