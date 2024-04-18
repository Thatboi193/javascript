let i =1
do {
    console.log(i)
    i++
} while (i <= 100)

i = 2
do {
    console.log(i)
    i++
    i++
} while (i <= 50)

i = -1
do {
    i++
    i++
    console.log(i)
    
} while (i < 70)


console.log("Divisible by 7")
i = 0
do {
    i += 7;
    console.log(i)
} while(i < 100)


console.log("mult 9")
i = 0
do {
    i+= 9
    console.log(i)
} while(i < 1000)


let sum = 0;
i = 0;
do {
    i++;
    sum = i + sum;
} while (i < 100)
console.log(sum)