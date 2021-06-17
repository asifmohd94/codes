"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bump = void 0;
function bump(x) {
    var count = 0;
    for (var _i = 0, _a = x.split(""); _i < _a.length; _i++) {
        var t = _a[_i];
        if (t == "n") {
            count++;
        }
    }
    if (count > 15)
        return "Car Dead";
    return "Woohoo!";
}
exports.bump = bump;
