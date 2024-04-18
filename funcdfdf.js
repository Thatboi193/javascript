function both(one, two) {
    if (two == null) {
        radius = one;
        return Math.PI * radius * radius;
    } else {
        width = one;
        height = two;
        return width * height;
    }
}
//depending on amout of parameters it uses circle or rectangle area calculations.
console.log(both(20));


