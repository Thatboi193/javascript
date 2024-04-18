class Rectangle {
    constructor(side1, side2) {
        this._side1 = side1;
        this._side2 = side2;
    }

    get side1() {
        return this._side1;
    }

    get side2() {
        return this._side2;
    }

    set side1(newSide1) {
        if (newSide1 > 0) {
            this._side1 = newSide1;
        } else {
            console.log("side1 must be a posetive number");
        }
    }

    set side2(newSide2) {
        if (newSide2 > 0) {
            this._side2 = newSide2;
        } else {
            console.log("side2 must be a posetive number");
        }
    }


    calculateArea() {
        return this._side1 * this._side2;
    }
}


myRectangle = new Rectangle(10, 10);


console.log(myRectangle.calculateArea());

myRectangle.side1 = 200;

console.log(myRectangle.side1);

console.log(myRectangle.calculateArea());
