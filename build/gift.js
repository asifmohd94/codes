"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gift = void 0;
function gift(x, arr) {
    var indices = [];
    var bol = false;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == x) {
                indices.push(i);
                indices.push(j);
                break;
            }
        }
        if (indices.length >= 2) {
            break;
        }
    }
    if (indices.length > 0) {
        return indices;
    }
    else
        return null;
}
exports.gift = gift;
;
