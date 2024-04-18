class Sports {
    constructor(name, playerCount) {
        this.name = name;
        this.playerCount = playerCount;
    }

    start() {
        console.log(`You begin playing ${this.name}.`);
    }

    stop() {
        console.log(`You stop playing ${this.name}.`);
    }
}


class Football extends Sports {

    kick() {
        console.log("You kick the football")
    }
}

class Basketball extends Sports {
    
}

class Hockey extends Sports {
    
}





f1 = new Football("Football", 22);
b1 = new Basketball("Basketball", 12);


f1.play();
b1.play();

