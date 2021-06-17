"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterLongWords = void 0;
function filterLongWords(sentence, n) {
    var arr1 = [];
    var arr = sentence.split(" ");
    var ans = arr.map(function (n) {
        return n.length;
    });
    var i = 0;
    while (i < ans.length) {
        if (ans[i] > n) {
            arr1.push(arr[i]);
        }
        i++;
    }
    return arr1;
}
exports.filterLongWords = filterLongWords;
