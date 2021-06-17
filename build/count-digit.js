"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nbDig = void 0;
function nbDig(n, d) {
    var res = 0;
    for (var g = 0; g <= n; g++) {
        var square = (g * g + "").split("");
        square.forEach(function (s) { return s == d ? res++ : null; });
    }
    return res;
}
exports.nbDig = nbDig;
