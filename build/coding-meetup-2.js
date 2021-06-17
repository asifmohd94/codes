"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSameLanguage = void 0;
function isSameLanguage(list) {
    var ans = list[0].language;
    var bol = true;
    for (var i = 0; i < list.length; i++) {
        if (list[i].language !== ans) {
            bol = false;
        }
    }
    return bol;
}
exports.isSameLanguage = isSameLanguage;
