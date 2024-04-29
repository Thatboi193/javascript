function add(num1, num2) {
    return num1 + num2;
}

console.log(add(20, 20))



function metersToKilometer(meters) {
    return(meters + " meters is " + meters/1000 + " Kilometers");

}

console.log(metersToKilometer(3300))


function evenOrOdd(num) {
    if (num % 2 == 0) {
        return(num + " is even")
    } else {
        return(num + " is odd")
    }
}


console.log(evenOrOdd(10))