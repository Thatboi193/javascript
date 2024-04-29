class Vehicle {
    constructor(make, model, color, year) {
        this.make = make;
        this.model = model;
        this.color = color;
        this.year = year;
    }

    start() {
        console.log(`${this.make} starts.`);
    }

    accelerate() {
        console.log(`${this.make} speeds up.`);
    }

    inspect() {
        console.log(`You inspect ${this.make} and see that its a ${this.model} and its colored ${this.color} and came out in ${this.year}`);
    }

    drive() {
        throw new Error("Method 'drive()' needs to be implemented")
    }
}

class Car extends Vehicle {

    constructor(make, model) {
        super(make, model);
    }

    drift() {
        console.log(`${this.make} drifts.`)
    }

    drive() {
        console.log(`Driving ${this.make} ${this.model}`)
    }
}


class Motorcycle extends Vehicle {
    constructor(make, model) {
        super(make, model);
    }
    wheelie() {
        console.log(`${this.make} pops a wheelie!`);
    }

    drive() {
        console.log(`Driving ${this.make} ${this.model}`);
    }
}


c1 = new Car("Saab", "Saab 12", "Yellow", 1998);

m1 = new Motorcycle("Suzuki", "Kalimari", "Blue", 2017);


m1.start();
m1.accelerate()
m1.wheelie();

c1.start();
c1.accelerate();
c1.drift();

c1.inspect();

m1.inspect();