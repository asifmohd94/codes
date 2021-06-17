"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = void 0;
function solve(stones) {
    var count = 0;
    var arr = stones.split("");
    for (var i = 0; i < stones.length - 1; i++) {
        if (arr[i] == arr[i + 1]) {
            count++;
        }
    }
    return count;
}
exports.solve = solve;
