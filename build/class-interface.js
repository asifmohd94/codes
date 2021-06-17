"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(abc) {
        this.side = abc;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    Square.prototype.perimeter = function () {
        return 4 * this.side;
    };
    return Square;
}());
exports.Square = Square;
var Circle = /** @class */ (function () {
    function Circle(radi) {
        this.radi = radi;
    }
    Circle.prototype.area = function () {
        return Math.PI * (this.radi * this.radi);
    };
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radi;
    };
    return Circle;
}());
exports.Circle = Circle;
