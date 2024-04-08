"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var Point = /** @class */ (function () {
    // x:number;
    // y:number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x=x;
        // this.y=y;  After using Private prefix no need of this
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ',Y:' + this.y);
    };
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('Value should not be less than 0');
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var x = point.X; //point.getX();
console.log("GetX:", x);
point.X = 10; //point.setX(10);
point.draw();
var point1 = new point_1.Points(1, 2);
point1.draw();
