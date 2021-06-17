"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNonConsecutive = void 0;
function firstNonConsecutive(arr) {
    var num = null;
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] != 1) {
            num = arr[i + 1];
            break;
        }
    }
    return num;
}
exports.firstNonConsecutive = firstNonConsecutive;
