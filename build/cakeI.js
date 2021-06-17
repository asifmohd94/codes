"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cake = void 0;
function cake(x, y) {
    var res = 0;
    var a = y.split("");
    for (var i = 0; i < a.length; i++) {
        res += i % 2 == 0 ? a[i].charCodeAt(0) : a[i].charCodeAt(0) - 96;
    }
    if (res > x * 0.7) {
        return 'Fire!';
    }
    return 'That was close!';
}
exports.cake = cake;
