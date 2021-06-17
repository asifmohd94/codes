"use strict";
function reverseLetter(str) {
    var str1 = '';
    var arr = str.split("");
    for (var i = arr.length - 1; i > -1; i--) {
        if (arr[i] >= 'a' && arr[i] <= 'z') {
            str1 += arr[i];
        }
    }
    return str1;
}
