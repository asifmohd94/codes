"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveTen = void 0;
function moveTen(s) {
    var str = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
    var arr = s.split('').map(function (v) { return v = str.indexOf(v) + 10; });
    return arr.map(function (v) { return v = str[v]; }).join('');
}
exports.moveTen = moveTen;
