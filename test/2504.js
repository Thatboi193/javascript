function clock() {
    let currentTime = new Date();
    let day = currentTime.getDate();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let milliseconds = currentTime.getMilliseconds();
    let clock = `Current Time - ${day}:${hours}:${minutes}:${seconds}:${milliseconds}`

    //console.log(`Current Time - ${day}:${hours}:${minutes}:${seconds}:${milliseconds}`)
    //document.getElementById("clock").innerHTML = clock;

}

//setInterval(clock, 1);

function christmas() {
    const christmas = new Date("Dec 24, 2024, 00:00:00")
    const now = new Date();

    const year = christmas.getFullYear();
    const month = christmas.getMonth();

    const msUntilChristmas = christmas.getTime() - now.getTime();

    const daysUntilChristmas = msUntilChristmas / (1000 * 60 * 60 * 24);
    const daysUntilChristmasRemainder = daysUntilChristmas - daysUntilChristmas % 86400;
    const hours = daysUntilChristmasRemainder * 24;
    console.log(daysUntilChristmasRemainder);
    console.log(hours);
    console.log(`how many days until chrstmas:${Math.floor(daysUntilChristmas)} and ${hours}`);
}


christmas();

