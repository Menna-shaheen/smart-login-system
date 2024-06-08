let loginEmail = document.getElementById('loginemail')
let loginPass = document.getElementById('loginpass')
let loginBtn = document.getElementById('loginbtn')
let signupName = document.getElementById('signupname')
let signupEmail = document.getElementById('signupemail')
let signupPass = document.getElementById('signuppass')
let signupBtn = document.getElementById('signupbtn')
var userNameWelcome = localStorage.getItem("sessionUserName")
var userData = []
//Local Storage
if (localStorage.getItem("user") != null) {
    userData = JSON.parse(localStorage.getItem("user"));
}

//Function for Signup
function addUser() {
    if (checkIsEmptySignUp() == false) {
        displayRequired()
        return false
    }
    else if (checkIsEmptySignUp() == true && validemail()==true && validname()==true && validpass()==true)  {
        if (exist() == true) {
            displayExist()
            return true;
        }
        displaySuccess()
        let user = {
            name: signupName.value,
            email: signupEmail.value,
            password: signupPass.value,
        }
        userData.push(user)
        localStorage.setItem("user", JSON.stringify(userData));
        clearForm()
        
    }

}
// Function for login
function searchUser() {
    if (checkIsEmptyLogin() == false) {
        displayRequiredLogin()

    }


    if (checkIsEmptyLogin() == true) {
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].email == loginEmail.value && userData[i].password == loginPass.value) {
                localStorage.setItem("sessionUserName", userData[i].name);

                window.location = './welcome.html'
                clearLogin()
            }
            else {
                displayIncorrect()
            }
        }

    }

}
// Function for Logout


//Functions used at signup an login 
function displayRequiredLogin() {
    document.getElementById('required').innerHTML = `<span class=' text-danger'>All inputs required`
}

function validname() {
    var text = signupName.value
    var regex = /^[A-Z][a-z0-9]{4,29}$/g;
    msgName = document.getElementById('msgname')
    if (regex.test(text) == true) {
        msgName.classList.add('d-none')
        return true
    }
    else {
        msgName.classList.remove('d-none')
        return false
    }
}
function validemail() {
    var text = signupEmail.value
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    msgEmail = document.getElementById('msgemail')
    if (regex.test(text) == true) {
        msgEmail.classList.add('d-none')
        return true

    }
    else {
        msgEmail.classList.remove('d-none')
        return false
    }
}

function validpass() {
    var text = signupPass.value
    var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/gm
    msgPass = document.getElementById('msgpass')
    if (regex.test(text) == true) {
        msgPass.classList.add('d-none')
        return true

    }
    else {
        msgPass.classList.remove('d-none')
        return false
    }
}
function checkIsEmptySignUp() {
    if (signupName.value == '' || signupEmail.value == '' || signupPass.value == '') {
        return false
    }
    else {
        return true
    }
}

function clearLogin() {
    loginEmail.value = ''
    loginPass.value = ''
}

function displayIncorrect() {
    document.getElementById('required').innerHTML = `<span class=' text-danger'>incorrect email or password</span>`
}

function checkIsEmptyLogin() {
    if (loginEmail.value == '' || loginPass.value == '') {
        return false
    }

    else {

        return true
    }
}
function displayRequired() {
    document.getElementById("required").innerHTML = `<span class=' text-danger'>All inputs required</span>`;
}
function displaySuccess() {
    document.getElementById("required").innerHTML = `<span class=' text-success'>success</span>`;
}
function displayExist() {
    document.getElementById("required").innerHTML = `<span class=' text-danger'>email already exists</span>`;
};
function exist() {
    for (var i = 0; i < userData.length; i++) {
        if (userData[i].email == signupEmail.value) {
            return true;
        }
    }
    return false;
}
function clearForm() {
    signupName.value = ''
    signupEmail.value = ''
    signupPass.value = ''
}
