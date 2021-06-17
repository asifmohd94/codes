"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highAndLow = void 0;
function highAndLow(numbers) {
    var max = -Infinity;
    var min = Infinity;
    var arr = numbers.split(" ");
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        var conv = parseInt(i);
        if (conv < min) {
            min = conv;
        }
        if (conv > max) {
            max = conv;
        }
    }
    return max + " " + min;
}
exports.highAndLow = highAndLow;
