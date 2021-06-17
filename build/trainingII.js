"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.howManySmaller = void 0;
function howManySmaller(arr, n) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toFixed(2);
    }
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var x = arr_1[_i];
        if (x < n)
            count++;
    }
    return count;
}
exports.howManySmaller = howManySmaller;
