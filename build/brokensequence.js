"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMissingNumber = void 0;
function findMissingNumber(sequence) {
    if (!sequence)
        return 0;
    if (/[^ 0-9]/.test(sequence))
        return 1;
    sequence = sequence.split(' ').sort(function (a, b) { return a - b; });
    for (var i = 0; i < sequence.length; i++) {
        if (sequence[i] != i + 1)
            return i + 1;
    }
    return 0;
}
exports.findMissingNumber = findMissingNumber;
