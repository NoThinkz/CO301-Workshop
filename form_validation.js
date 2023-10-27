function formValidation() {
    var uname = document.registration.username;
    var upass = document.registration.pass;
    var ufname = document.registration.fname;
    var ulname = document.registration.lname;
    var uemail = document.registration.email;
    var uadd = document.registration.address;
    var ucountry = document.registration.country;
    var uzip = document.registration.zip;
    if (username_validation(uname, 5, 12)) {
        if (pass_validation(upass, 6, 16)) {
            if(allLetter(ufname)){
                if(allLetter(ulname)){
                    if(allEmail(uemail)){
                        if(allNumber(uzip)){
                            if(countryselect(ucountry)){
                                return true;
                                }
                            }
                        }
                }
            }
        }
    }
    return false;
}
function username_validation(uname, min, max) {
    var uname_len = uname.value.length;
    if (uname_len == 0 || uname_len >= max || uname_len < min) {
        alert("Username should not be empty / length be between " + min + " to " + max);
        uname.focus();
        return false;
    }
    return true;
}

function pass_validation_validation(upass, min, max) {
    var upass_len = upass.value.length;
    if (upass_len == 0 || upass_len >= max || upass_len < min) {
        alert("Password should not be empty / length be between " + min + " to " + max);
        upass.focus();
        return false;
    }
    return true;
}

function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.value.match(letters)) {
        return true;
    } else {
        alert(inputtxt.labels[0].innerHTML + ' must have alphabet characters only'); 
        inputtxt.focus();
        return false;
    }
}

function allNumber(inputnum) {
    var numbers = /^[0-9]+$/; ;
    if (inputnum.value.match(numbers)) {
        return true;
    } else {
        alert(inputnum.labels[0].innerHTML + ' must have Numbers only'); 
        inputnum.focus();
        return false;
    }
}

function allEmail(inputnum) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputemail.value.match(mailformat)) {
        return true;
    } else {
        alert(inputemail.labels[0].innerHTML + ' must have Email only'); 
        inputemail.focus();
        return false;
    }
}
function countryselect(ucountry) {
    if (ucountry.value == "") { 
    alert('Select your country from the list'); 
    ucountry.focus(); return false; }
    else { 
    return true; 
    }
    }
    
