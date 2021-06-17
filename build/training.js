"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mirrorImage = void 0;
function mirrorImage(arr) {
    var _a = [0, 0], a = _a[0], b = _a[1];
    if (arr.some(function (e, i) {
        if (i < arr.length - 1) {
            a = arr[i];
            b = arr[i + 1];
            return a === parseInt(b.toString().split("").reverse().join(""));
        }
    }))
        return [a, b];
    else
        return [-1, -1];
}
exports.mirrorImage = mirrorImage;
