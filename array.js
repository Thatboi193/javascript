/** 

let myArr = ["banana", "banan", [" even more banan", "loloo"]]


for(let i = 0; i < myArr.length; i++) {
    console.log(myArr[i])
}

console.log(myArr)




let numbers = new Array();
numbers[0] = 1;
numbers[1] = 2;

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}


let games = new Array("COD", "The Witcher", "Elden Ring", "Baldur's Gate", [1, 2, 3,]);


for(let i = 0; i < games.length; i++) {
    if (games[i] = typeof(arr))
    for(let j = 0; j < games[i].length; j++) {
        console.log(games[i][j])
    }

}





let cars = ["Porche", "Ford", "Mercedes", "nissan", "bmw", "Lamborghini", "Ferrari", "bamam", "lemon", "Pancakes"];

console.log(cars.slice(cars.length / 2));




let myArr = [];

let i = 1;
while(i < 100) {
    if (i % 2 == 0) {
        myArr.push(i);
        
    } else {
        console.log();
    }
    i++
}

console.log(myArr)



let myArreven = [];
let myArrodd = [];

for(let i = 200; i < 300; i += 2) {
    myArrodd.push(i);
}

for(let i = 201; i < 300; i += 2) {
    myArreven.push(i);
}
console.log(myArrodd);
console.log(myArreven);


let myarrall = myArreven.concat(myArrodd);

console.log(myarrall);




let myArr = ["Norway", "USA", "Bangladesh", "Sweden", "China"];

console.log(myArr.toString());




let myArr = [];

for (let i = 7; i <= 70; i += 7) {
    
    myArr.push(i);
    
}

for(let i = 1; i <= 10; i++) {
    console.log(myArr[i - 1] + " = 7 x " + i);
}

*/


let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multable = [];

for (let i = 1; i <= myArr.length; i++) {
    multable.push("multiplcation of " + i)
    for (let j = 1; j <= 10; j++) {
        multable.push(myArr[i-1] * j)
    }
}

console.log(multable)


