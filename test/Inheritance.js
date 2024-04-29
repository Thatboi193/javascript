/* TASK 1

class Vehicle {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`${this.name} starts.`);
    }

    stop() {
        console.log(`${this.name} stops.`);
    }
}

class Car extends Vehicle {
    constructor(name) {
        super(name);
    }
}

class Motorcycle extends Vehicle {
    constructor(name) {
        super(name);
    }
}

class Truck extends Vehicle {
    constructor(name) {
        super(name);
    }
}

l1 = new Car("Volvo");
l2 = new Motorcycle("Suzuki");
l3 = new Truck("Scania");
l1.start();
l2.start();
l3.start();

l1.stop();
l2.stop();
l3.stop();
TASK 1 END*/


/* TASK 2
class Employee {
    constructor(name, hours) {
        this.name = name;
        this.hours = hours;
    }
    calculateSalary() {
        console.log("calculateSalary must be implemented for each subclass");
    }
}

class Manager extends Employee{
    constructor(name, hours, position) {
        super(name, hours, position);
    }

    calculateSalary() {
        let Salary = 1000;
        console.log(Salary * this.hours);
    }
}

class Developer extends Employee{
    constructor(name, hours) {
        super(name, hours);
    }
    calculateSalary() {
        let Salary = 100;
        console.log(Salary * this.hours);
    }
}

class Salesperson extends Employee{
    constructor(name, hours) {
        super(name, hours);
    }
    calculateSalary() {
        let Salary = 10;
        console.log(Salary * this.hours);
    }
}

let m1 = new Manager("John", 20);
let d1 = new Developer("Joe", 40);
let s1 = new Salesperson("Tor", 50);

m1.calculateSalary();
s1.calculateSalary();
s1.calculateSalary();
TASK 2 END*/

/* TASK 3


class Account {
    constructor() {

    }

    withdraw(amount) {
        
        this.balance = this.balance - amount;
        console.log(`You Had ${this.balance + amount} you withdrew ${amount}. You now have ${this.balance} left.\n`);
    }

    deposit(amount) {
        
        this.balance = this.balance + amount;
        console.log(`You Had ${this.balance - amount} you deposit ${amount}.\n You now have ${this.balance} in your account.\n`);
    }
}


class CheckingAccount extends Account {
    constructor(balance) {
        super();
        this.balance = balance;
    }

    
}

class SavingAccount extends Account {
    constructor(balance) {
        super();
        this.balance = balance;

    }

    
    calculateInterest() {
        let interestRate = 0.0275;
        let result = this.balance * (1 + interestRate);
        console.log(`In 1 year your ${this.balance} will turn to ${result}.\n`)

    }
}


s1 = new SavingAccount(1000);
c1 = new CheckingAccount(2000);

c1.deposit(200);
s1.deposit(1000);

 

TASK 3 END*/

/* TASK 4
class Shape {
    
    calculateArea() {
        console.log("calculateArea must be implemented for each subclass");
    }
}


class Rectangle extends Shape{
    constructor(one, two) {
        super();
        this.one = one;
        this.two = two;
    }

    calculateArea() {
        return this.one * this.two;
    }

}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

}


r1 = new Rectangle(10, 10);
c1 = new Circle(10);
console.log(r1.calculateArea());
console.log(c1.calculateArea());

 TASK 4 END*/


/* TASK 5

class Bankaccount {
    constructor() {

    }
    withdraw(amount) {
        console.log(`Witdraw msut be implemented`);
    }

    deposit(amount) {
        console.log(`Deposit must be implemented`);
    }

}


class CheckingAccount extends Bankaccount {
    constructor(balance) {
        super();
        this.balance = balance;
    }

    withdraw(amount) {
        this.balance = this.balance - amount;
        console.log(`You Had ${this.balance + amount} you withdrew ${amount}. You now have ${this.balance} left.\n`);
    }

    deposit(amount) {
        this.balance = this.balance + amount;
        console.log(`You Had ${this.balance - amount} you deposit ${amount}.\n You now have ${this.balance} in your account.\n`);
    }
}

class SavingAccount extends Bankaccount {
    constructor(balance) {
        super();
        this.balance = balance;

    }

    withdraw(amount) {
        
        this.balance = this.balance - amount;
        console.log(`You Had ${this.balance + amount} you withdrew ${amount}. You now have ${this.balance} left.\n`);
    }

    deposit(amount) {
        
        this.balance = this.balance + amount;
        console.log(`You Had ${this.balance - amount} you deposit ${amount}.\n You now have ${this.balance} in your account.\n`);
    }

    calculateInterest() {
        let interestRate = 0.0275;
        let result = this.balance * (1 + interestRate);
        console.log(`In 1 year your ${this.balance} will turn to ${result}.\n`)

    }
}


s1 = new SavingAccount(1000);
c1 = new CheckingAccount(2000);

c1.deposit(200);

TASK 5 END */

/* TASK 6
class Employee {
    constructor(name, hours) {
        this.name = name;
        this.hours = hours;
    }

    calculateSalary() {
        console.log("calculateSalary() must be implemented for each subclass");
    }

    getEmployeeDetails() {
        console.log("getEmployeeDetails() must be implemented for each subclass");
    }
}

class Manager extends Employee {
    constructor(name, hours) {
        super(name, hours);
    }

    calculateSalary() {
        let result = 1000 * this.hours;
        return `${this.name} has earned ${result}kr.`;
    }

    getEmployeeDetails() {
        return `This employee is called ${this.name}. They have worked ${this.hours} hours`;
    }
}

class Developer extends Employee {
    constructor(name, hours) {
        super(name, hours);
    }

    calculateSalary() {
        let result = 100 * this.hours;
        return `${this.name} has earned ${result}kr.`;
    }

    getEmployeeDetails() {
        return `This employee is called ${this.name}. They have worked ${this.hours} hours`;
    }
}

b1 = new Manager("John", 60);
b2 = new Developer("David", 100)

console.log(b1.calculateSalary());
console.log(b2.calculateSalary());
console.log(b1.getEmployeeDetails());
console.log(b2.getEmployeeDetails());

TASK 6 END */



/* TASK 7
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    setName(newName) {
        if (newName != "")
            this._name = newName;
        else {
            console.log("Invalid name.");
        }
    }

    setAge(newAge) {
        if (newAge >= 0) {
            this._age = newAge;
        } else {
            console.log("Age must be a number");
        }
    }

    getName() {
        return this._name;
    }

    getAge() {
        return this._age;
    }
}

p1 = new Person();

p1.setAge();
console.log(p1.getAge());


p1.setName("John");
console.log(p1.getName());

TASK 7 END */

/* TASK 8
class Bankaccount {
    constructor(balance, accountNumber) {
        this._balance = balance;
        this._accountNumber = accountNumber;
    }

    withdraw(amount) {
        this._balance = this._balance - amount;
        console.log(`You Had ${this._balance + amount} you withdrew ${amount}. You now have ${this._balance} left.\n`);
    }

    deposit(amount) {
        this._balance = this._balance + amount;
        console.log(`You Had ${this._balance - amount} you deposit ${amount}. You now have ${this._balance} in your account.\n`);
    }

    getBalance() {
        return this._balance;
    }

    getAccountNumber() {
        return this._accountNumber;
    }
}

bb = new Bankaccount(2000, 1234);

bb.withdraw(100);
bb.deposit(100);

console.log(bb.getAccountNumber());
console.log(bb.getBalance());

TASK 8 END */

/* TASK 9
class Shape {
    constructor() {

    }

    calculateArea() {
        console.log("calculateArea must be implemeted for each shape")
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    calculateArea() {
        let result = Math.PI * this.radius * this.radius
        console.log(`${result} is the area of a circle with ${this.radius} radius.`)
    }
}

class Rectangle extends Shape {
    constructor(num1, num2) {
        super();
        this.num1 = num1;
        this.num2 = num2;
    }
    calculateArea() {
        let result = this.num1 * this.num2
        console.log(`${result} is the area of a rectangle with ${this.num1} side and ${this.num2} side.`)
    }
}

let r1 = new Rectangle(10, 20);
let c1 = new Circle(10);

r1.calculateArea();
c1.calculateArea();

TASK 9 END */

class Animal {
    constructor() {

    }

    makeSound() {
        console.log(`The animal makes a sound`);
    }
}

class Dog extends Animal {
    constructor() {
        super();
    }

    makeSound() {
        console.log(`The dog barks`);
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }

    makeSound() {
        console.log(`The cat meaows`);
    }
}

let d1 = new Dog;
let c1 = new Cat;

d1.makeSound();
c1.makeSound();