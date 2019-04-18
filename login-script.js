$(document).ready(function () {

    $("#next-btn").click(addUser);
    console.log("Doc ready");
    var arrOfUser;
    getUsers();

});

function getUsers() {
    $.ajax({
        url: "http://localhost:8080/beastme/",
        async: true,
        success: logUsers,
        error: errorCallback
    });
}

function logUsers(response) {
    console.log(response);
    arrOfUser = response;
}

function errorCallback(request) {
    console.log(request);
}


/***********
 * Login
 */

$("#login-button").click(function (event) {
    var usernameInput = $("#username").val();
    var passwordInput = $("#password").val();

    var isLogged = arrOfUser.some(function (element) {
        return element.getUsername() === usernameInput && element.getPassword() === passwordInput;
    })

    if (isLogged) {
        startChat(usernameInput);
    }

});
/***********
 * Eye
 */

var eye = $("#eye");

eye.click(function () {
    var pass = $("#password");

    if (pass.prop('type', 'password')) {
        pass.prop('type', 'text');

    }
});

/***********
 * Register
 ***********/

function addUser(event) {
    console.log("trying to add")
    $.ajax({
        url: 'http://localhost:8080/beastme/',
        type: 'POST',
        data: JSON.stringify({
            name: $("#nameInput").val(),
            username: $("#userInput").val(),
            password: $("#passInput").val(),
            email: $("#emailInput").val()
        }),
        async: true,
        contentType: 'application/json',
        success: goToQuestions,
        error: errorCallback
    });

}


function goToQuestions(response) {
    console.log("questions")
    getUsers();
}

