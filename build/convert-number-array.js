"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitize = void 0;
var digitize = function (n) {
    var arr = [];
    while (n > 0) {
        var rem = n % 10;
        arr.push(rem);
        n = Math.floor(n / 10);
    }
    return arr;
};
exports.digitize = digitize;
