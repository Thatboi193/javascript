function month() {

    let monthName = "bad";
    let monthNumber = prompt("Enter 1- 12");
    monthNumber = parseInt(monthNumber);
    
    switch (monthNumber) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "Mars";
            break;
        case 4:
            monthName = "April";
            break;
    
        case 5:
            monthName = "May";
            break;
    
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "Desember";
            break;
        default:
            monthName = "TWAT pick a differnt number";
            break;
    
    }
    
    document.write(monthName);
    
    
    
    } 