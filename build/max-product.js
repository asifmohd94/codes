"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjacentElementsProduct = void 0;
function adjacentElementsProduct(array) {
    var ans = -700000000;
    for (var i = 0; i < array.length - 1; i++) {
        ans = Math.max(array[i] * array[i + 1], ans);
    }
    return ans;
}
exports.adjacentElementsProduct = adjacentElementsProduct;
