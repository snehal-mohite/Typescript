"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Points = void 0;
var Points = /** @class */ (function () {
    function Points(x, y) {
        this.x = x;
        this.y = y;
    }
    Points.prototype.draw = function () {
        console.log('X:' + this.x + ',Y:' + this.y);
    };
    return Points;
}());
exports.Points = Points;
