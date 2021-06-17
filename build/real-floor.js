"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRealFloor = void 0;
function getRealFloor(n) {
    var ans = 0;
    if (n < 13 && n >= 1) {
        ans = n - 1;
    }
    else if (n >= 14) {
        ans = n - 2;
    }
    else {
        ans = n;
    }
    return ans;
}
exports.getRealFloor = getRealFloor;
