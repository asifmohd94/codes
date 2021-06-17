"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quarterOf = void 0;
function quarterOf(month) {
    var qtr = 0;
    if (month <= 3) {
        qtr = 1;
    }
    else if (month > 3 && month <= 6) {
        qtr = 2;
    }
    else if (month > 6 && month <= 9) {
        qtr = 3;
    }
    else {
        qtr = 4;
    }
    return qtr;
}
exports.quarterOf = quarterOf;
