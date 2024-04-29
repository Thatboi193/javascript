function FormValidation() {
    let username = document.myForm.username.value;
    let password = document.myForm.password.value;
    let repeatPassword = document.myForm.repeatPassword.value;
    let phoneNumber = document.myForm.phonenumber.value;

    if (username == null || username == "") {
        document.getElementById("userNameInfo").innerHTML ="You must enter a username"
        return false;

    } else if (username.length < 5) {
        document.getElementById("passwordInfo").innerHTML =" Username must be longer that 5 characters"
        return false;
    } else if (password.length < 7){
        document.getElementById("passwordInfo").innerHTML ="Password must be 7 characters or more"
        return false
    } else if (repeatPassword !== password || repeatPassword == "") {
        document.getElementById("repeatPasswordInfo").innerHTML ="Password does not match"
        return false;
    }else if (phoneNumber == "") {
        document.getElementById("phoneNumberInfo").innerHTML = "Enter 8 numbers"
        return false;

    } else if ( isNaN(phoneNumber)) {
        document.getElementById("phoneNumberInfo").innerHTML = "Enter Numeric value only"
        return false;

    } else if ( phoneNumber.length < 8) {
        document.getElementById("phoneNumberInfo").innerHTML = "Must be longer that 8 numbers"
        return false;

    }else {
        return true;
    }

    

}