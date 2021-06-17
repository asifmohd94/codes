"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.overTheRoad = void 0;
function overTheRoad(address, n) {
    var even = [];
    var odd = [];
    var evn = 2, od = n * 2 - 1, ans = 0;
    for (var i = 0; i < n; i++) {
        even.push(evn);
        odd.push(od);
        evn += 2;
        od -= 2;
    }
    if (address % 2 == 0) {
        for (var i = 0; i < n; i++) {
            if (even[i] == address) {
                ans = odd[i];
            }
        }
    }
    else {
        for (var i = 0; i < n; i++) {
            if (odd[i] == address) {
                ans = even[i];
            }
        }
    }
    return ans;
}
exports.overTheRoad = overTheRoad;
console.log(overTheRoad(4, 5));
