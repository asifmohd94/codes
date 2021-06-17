"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeBin = void 0;
function fakeBin(x) {
    var ans = '';
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 5) {
            ans += 0;
        }
        else if (x[i] >= 5) {
            ans += 1;
        }
    }
    return ans;
}
exports.fakeBin = fakeBin;
