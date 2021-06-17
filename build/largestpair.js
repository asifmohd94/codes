"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.largestPairSum = void 0;
function largestPairSum(numbers) {
    var largest = -Infinity;
    for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            var sum = numbers[i] + numbers[j];
            if (sum > largest) {
                largest = sum;
            }
        }
    }
    return largest;
}
exports.largestPairSum = largestPairSum;
