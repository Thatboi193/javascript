/** 
car = {
    name: "Kia",
    model: "ev60",
    weight: 1200,
    color: "green",
}


console.log(car);



let car = new Object()
car.name = "Kia";
car.model = "ev60";
car.weight = 1200;
car.color = "green";

console.log(car);





function car(name, model, weight, color) {
    this.name = name;
    this.model= model;
    this.weight = weight;
    this.color = color;
}

c = new car("Kia", "ev6", 1200, "green");

console.log(c.name)

*/



favmovie = {
    name: "Interstellar",
    director: "Christopher Nolan",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
}

console.log(favmovie.name +"\n"+favmovie.director + "\n" + favmovie.actors)


game = {
    name: "Red Dead Redemption 2",
    playercount: 1,
    genre: "RPG",


}

console.log(game.name +"\n"+game.playercount + "\n" + game.genre);



person = {
    name: "Tor Vidar Arnesen",
    age: 18,
    interests: "gaming"
}

console.log(person.name +"\n"+ person.age + "\n" + person.interests);


function book(title, author, publishDate) {
    this.title = title;
    this.author = author;
    this.publishDate = publishDate;
}


c = new book("Hary Potter","J.K Rowling", 2002);
console.log(c);


function Nums(num1, num2) {
    this.add = num1 + num2;
    this.sub = num1 - num2;
    this.div = num1 / num2;
    this.mul = num1 * num2;
}

a = new Nums(2, 55);

console.log(a.add);
console.log(a.sub);
console.log(a.div);
console.log(a.mul);