let num1 = 0;
let num2 = 0;
let result = 0;
let choice;

const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });


 
  readline.question(`Enter a choice `, num => {
    num = choice;
    
    readline.close();
  });

switch (choice) {
    case 1:
        add(num1, num2);
    break;

    case 2:
        sub();
    break;

    case 3:
        div()
    break;

    case 4:
        mul()
    break;

    case 5:
        mod()
    break;
    default:
        console.log("TWAT")
        break;
}

function add(num1, num2) {
    console.log("You have chosen addition!")
      
      readline.question(`Enter first number `, num => {
        num = num1;
        readline.close();
      });
    
    
      readline.question(`Enter second number `, num => {
        num = num2;
        readline.close();
      });

    result = num1 + num2;
}

function sub(num1, num2) {
    result = num1 - num2;
}

function div(num1, num2) {
    result = num1 / num2;
}

function mul(num1, num2) {
    result = num1 * num2;
}

function mod(num1, num2) {
    result = num1 % num2;
}



 