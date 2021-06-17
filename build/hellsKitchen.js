"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gordon = void 0;
function gordon(a) {
    a = a.toUpperCase();
    var arr = a.split("");
    var str = "";
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (i == 'a' || i == 'A') {
            str += '@';
        }
        else if (i == 'e' || i == 'i' || i == 'o' || i == 'u' || i == 'E' || i == 'O' || i == 'I' || i == 'U') {
            str += '*';
        }
        else if (i == " ") {
            str = str + '!!!! ';
        }
        else {
            str = str + i;
        }
    }
    return str + '!!!!';
}
exports.gordon = gordon;
