class Videogames {
    constructor(name, year, genre, platform) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.platform = platform;
    }

    info() {
        console.log(`Name: ${this.name}, Release date: ${this.year}, Genre:${this.genre}, Platform:${this.platform}`)
    }
}

v2 = new Videogames("Baldurs Gate 3", "2023", "Rpg, Top-Down", "PC, PS5");
console.log(v2)
v2.info();