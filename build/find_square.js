"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findSquares = void 0;
function findSquares(num) {
    var a = 0, b = 1;
    while (b < 1000000) {
        if ((b * b) - (a * a) == num) {
            break;
        }
        a++;
        b++;
    }
    var ans = b * b + "-" + a * a;
    return ans;
}
exports.findSquares = findSquares;
;
