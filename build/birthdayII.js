"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.present = void 0;
function present(x, y) {
    if (x === 'badpresent')
        return 'Take this back!';
    if (x === 'dog')
        return "pass out from excitement " + y + " times";
    if (x === 'crap')
        return 'acpr';
    if (x === 'empty')
        return 'empty';
    if (x === 'bang')
        return x.split('').reduce(function (a, b) { return a + (b.charCodeAt() - y); }, 0);
    return x.split('').map(function (v) { return String.fromCharCode(v.charCodeAt() + y); }).join('');
}
exports.present = present;
