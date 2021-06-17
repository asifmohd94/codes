"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divisors = void 0;
function divisors(n) {
    var i = 1;
    var count = 0;
    while (i <= n) {
        if (n % i == 0) {
            count++;
        }
        i++;
    }
    return count;
}
exports.divisors = divisors;
