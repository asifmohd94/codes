"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joggers = void 0;
function joggers(x, y) {
    var a = Math.max(x, y);
    var b = Math.min(x, y);
    var m = a;
    while (m % b !== 0) {
        m += a;
    }
    m;
    var arr = [];
    arr.push(m / x);
    arr.push(m / y);
    return arr;
}
exports.joggers = joggers;
