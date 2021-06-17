"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.threeInOne = void 0;
function threeInOne(arr) {
    var ans = new Array();
    var sum = 0;
    for (var i = 0; i < arr.length; i = i + 3) {
        var temp = arr.slice(i, i + 3);
        sum = 0;
        for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
            var x = temp_1[_i];
            sum += x;
        }
        ans.push(sum);
    }
    return ans;
}
exports.threeInOne = threeInOne;
