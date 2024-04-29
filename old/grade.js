let perGrade = 25;

switch (true) {
    case perGrade < 35:
        console.log("F")
    break;

    case perGrade >= 35 && perGrade <= 45:
        console.log("E")
    break;

    case perGrade >= 46 && perGrade <= 55:
        console.log("D")
    break;

    case perGrade >= 56 && perGrade <= 65:
        console.log("C")
    break;

    case perGrade >= 66 && perGrade <= 75:
        console.log("B")
    break;

    case perGrade > 75:
        console.log("A")
    break;

    default:
        console.log("INVALID")
        break;
}




