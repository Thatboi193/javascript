class Animal {
    constructor(name, numlegs, type, fur) {
        this.name = name;
        this.numlegs = numlegs;
        this.type = type;
        this.fur = fur;
    }

    speak() {
        console.log(` ${this.name} speaks`);
    }

    breath() {
        console.log(`${this.name} breath air`);
    }
}


class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }

    breath() {
        console.log(`${this.name} breaths cyanide gas`)
    }
}


let dog = new Dog("Buddy");
let cat = new Cat("Garfield")

dog.speak();
cat.speak();
cat.breath();