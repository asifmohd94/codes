"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countDevelopers = void 0;
function countDevelopers(list) {
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i].language == "JavaScript" && list[i].continent == "Europe") {
            count++;
        }
    }
    return count;
}
exports.countDevelopers = countDevelopers;
