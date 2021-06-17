"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(str, ending) {
    var string = str.substring(str.length - ending.length);
    if (string === ending) {
        return true;
    }
    return false;
}
exports.solution = solution;
