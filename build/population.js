"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.G964 = void 0;
var G964 = /** @class */ (function () {
    function G964() {
    }
    G964.nbYear = function (p0, percent, aug, p) {
        var population = p0;
        var count = 0;
        while (population < p) {
            population = population + population * (percent / 100) + aug;
            count++;
        }
        return count;
    };
    return G964;
}());
exports.G964 = G964;
