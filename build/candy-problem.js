"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseLetter = void 0;
function reverseLetter(str) {
    var str1 = '';
    var arr = str.split("");
    for (var i = arr.length - 1; i > -1; i--) {
        if (arr[i] >= 'a' && arr[i] <= 'z') {
            str1 += arr[i];
        }
    }
    return str1;
}
exports.reverseLetter = reverseLetter;
