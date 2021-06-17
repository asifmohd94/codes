"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaOrPerimeter = void 0;
function areaOrPerimeter(l, w) {
    var area = 0;
    if (l == w) {
        area = l * l;
    }
    else {
        area = 2 * (l + w);
    }
    return area;
}
exports.areaOrPerimeter = areaOrPerimeter;
;
