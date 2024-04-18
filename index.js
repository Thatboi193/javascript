const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question(`Enter a number `, num => {
    if (num >= 50) {
        console.log(num + " is greater than 50");
    } else {
        console.log(num + " is less than 50");
    }
    
    readline.close();
  });
  