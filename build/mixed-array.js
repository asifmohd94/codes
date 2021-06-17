"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMix = void 0;
function sumMix(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        if (typeof (x[i]) == "string") {
            var abc = +x[i];
            sum = sum + abc;
            console.log(sum, typeof (abc));
        }
        else {
            sum += x[i];
        }
    }
    return sum;
}
exports.sumMix = sumMix;
