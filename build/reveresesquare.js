"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseSeq = void 0;
var reverseSeq = function (n) {
    var arr = [];
    var i = n;
    while (i >= 1) {
        arr.push(i);
        i--;
    }
    return arr;
};
exports.reverseSeq = reverseSeq;
