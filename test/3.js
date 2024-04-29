
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

