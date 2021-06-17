"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oddOrEven = void 0;
function oddOrEven(array) {
    var sum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        sum += i;
    }
    if (sum % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
exports.oddOrEven = oddOrEven;
