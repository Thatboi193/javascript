class Shape{
    area() {
        throw new Error("Error area() must be implemented")
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        this.base = base;
        this.height = height
    }
}


let rectangle = new Rectangle(8, 8);
let circle = new Circle(20);
console.log(rectangle.area());