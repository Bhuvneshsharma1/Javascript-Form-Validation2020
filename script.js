const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// Add Event

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
})


const sendData = (usernameVal, sRate, count) => {
    if(sRate === count){
        alert('Form Submission Successful');
        swal("Welcome! " + usernameVal, "Registration Successful", "success");
        location.href = `demo.html?username=${usernameVal}`
    }
}

// For final Data validation

const successMsg = (usernameVal) => {
    let formCon = document.getElementsByClassName('form-control');
    var count = formCon.length - 1
    for (var i = 0; i<formCon.length; i++) {
        if(formCon[i].className == "form-control success"){
            var sRate = 0+ i;
            sendData(usernameVal, sRate, count);
        }else {
            return false;
        }
    }
}

// More Email Validate
const isEmail = (emailVal) => {
    var atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;

    var dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;

    if (dot === emailVal.length - 1) return false;
    return true;
}


// Define the validate function

const validate = () => {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    // Validate Username

    if(usernameVal === ""){
        setErrorMsg(username, 'username cannot be blanked');
    }else if (usernameVal.length <= 2) {
        setErrorMsg(username, 'username min 3 character');
    }else{
        setSuccessMsg(username);
    }

        // Validate Email

        if(emailVal === ""){
            setErrorMsg(email, 'email cannot be blanked');
        }else if (!isEmail(emailVal)) {
            setErrorMsg(email, 'Not a valid Email');
        }else{
            setSuccessMsg(email);
        }


        // Validate Phone

        if(phoneVal === "") {
            setErrorMsg(phone, 'Phone Number cannot be blank');
        } else if (phoneVal.length !== 10) {
            setErrorMsg(phone, 'Not a valid Phone Number');
        }else{
            setSuccessMsg(phone);
        }


        // Validate Password

        if(passwordVal === "") {
            setErrorMsg(password, 'Password cannot be blank');
        } else if (passwordVal.length <= 5) {
            setErrorMsg(password, '*Min 6 Character');
        }else{
            setSuccessMsg(password);
        }


        // Validate CPassword

        if(cpasswordVal === "") {
            setErrorMsg(cpassword, 'Password cannot be blank');
        } else if (passwordVal !== cpasswordVal) {
            setErrorMsg(cpassword, 'Password Not Match');
        }else{
            setSuccessMsg(cpassword);
        }


        successMsg(usernameVal);
}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className= "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className= "form-control success";
}