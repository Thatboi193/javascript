function cube() {
    document.getElementById("number").value = "Jhonny bravo";
    
}



function evenOdd() {
    if (num % 2 > 0) {
        document.write(num + " is not even")
    } else {
        document.write(num + " is even")
    }
}


function multable() {
    let num2 = document.getElementById("mult").value;
    for (let j = 1; j <= 10; j++) {
        
        alert(num2 * j);
    }
}


function divchange() {
    console.log(" i ran")
    let changeColor = document.getElementsByClassName("changeColor");
    console.log(changeColor);
    for (let i = 0; i < changeColor.length; i++) {
        changeColor[i].style.backgroundColor = "yellow";
        console.log(changeColor);
    }
}