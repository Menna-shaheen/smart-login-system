var userNameWelcome = localStorage.getItem("sessionUserName")
if (userNameWelcome) {
    document.getElementById("userLogin").innerHTML = "Welcome " + userNameWelcome+ '!';
}
function welcome() {
    console.log('done');
    window.location = './index.html'
}

