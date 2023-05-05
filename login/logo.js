
function auth() {
    var username = document.getElementById("Username").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("_signup_password").value;
    var confirm = document.getElementById("confirm").value;
    console.log(username, 'username');
    console.log(email, 'Email');
    console.log(password, '_signup_password');
    console.log(confirm, 'confirm');
    if (username == "admin" && email == "admin@gmail.com" && password == "admin123" && confirm == "admin123") {
        window.localStorage.setItem("login", "true");
        alert("Sign Up Succesfully");
        window.location.assign("")

    }
    else {
        alert("Invalid Information")
        return;
    }

}
function aut() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("_signin_password").value;
    console.log(username, 'username');
    console.log(password, '_signin_password');
    if (username == "admin" && password == "admin123") {
        window.localStorage.setItem("login", "true");
        alert("Login Succesfully");
        window.location.assign("/main/front.html")


    } else {
        alert("Invalid information");
        return;
    }
}