interface circledata {
  radius?: number;
  color?: string;
}
class Circle {
  radius: number;
  color: string;
  constructor(obj: circledata) {
    this.color = obj.color;
    this.radius = obj.radius;
  }
  getRadius() {
    console.log(obj.radius);
  }
  setRadius(radius: number): void {
    obj.radius = radius;
    console.log(radius);
  }
  getColor() {
    console.log(obj.color);
  }
  setColor(color: string) {
    obj.color = color;
    console.log(color);
  }
  getArea() {
    let area = Math.PI * Math.pow(obj.radius, 2);
    console.log(area);
  }
  getCircumferenece() {
    let circum = 2 * Math.PI * obj.radius;
    console.log(circum);
  }
}
let obj = {
  radius: 1,
  color: "red",
};
let data = new Circle(obj);
console.log(data);
data.getRadius();
data.setRadius(2);
data.getColor();
data.setColor("yellow");
data.getArea();
data.getCircumferenece();
console.log(data);
