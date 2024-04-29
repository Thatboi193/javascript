class Circle {
    constructor(radius) {
        this._radius = radius;

    }

    get radius() {
        return this._radius;
    }

    set radius(newRadius) {
        if (newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.log("Radius must be a posetive number")
        }
        }
    

    calculateArea() {
        return Math.PI * this._radius * this._radius;
    }
}


let myCircle = new Circle(7);

console.log(myCircle.radius);
myCircle.radius = 10;
console.log(myCircle.radius);
console.log(myCircle.calculateArea(7))