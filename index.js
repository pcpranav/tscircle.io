var Circle = /** @class */ (function () {
    function Circle(obj) {
        this.color = obj.color;
        this.radius = obj.radius;
    }
    Circle.prototype.getRadius = function () {
        console.log(obj.radius);
    };
    Circle.prototype.setRadius = function (radius) {
        obj.radius = radius;
        console.log(radius);
    };
    Circle.prototype.getColor = function () {
        console.log(obj.color);
    };
    Circle.prototype.setColor = function (color) {
        obj.color = color;
        console.log(color);
    };
    Circle.prototype.getArea = function () {
        var area = Math.PI * Math.pow(obj.radius, 2);
        console.log(area);
    };
    Circle.prototype.getCircumferenece = function () {
        var circum = 2 * Math.PI * obj.radius;
        console.log(circum);
    };
    return Circle;
}());
var obj = {
    radius: 1,
    color: "red"
};
var data = new Circle(obj);
console.log(data);
data.getRadius();
data.setRadius(2);
data.getColor();
data.setColor("yellow");
data.getArea();
data.getCircumferenece();
console.log(data);
