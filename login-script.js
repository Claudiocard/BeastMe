$(document).ready(function () {



    $("#next-btn").click(addUser);
    $('#q1 input').change(checkQ1);
    $('#q2 input').change(checkQ2);
    $('#q3 input').change(checkQ3);
    $('#q4 input').change(checkQ4);
    $('#q5 input').change(checkQ5);
    $('#q6 input').change(checkQ6);
    $("#quizz-btn").click(updateUser);
    
    console.log("Doc ready");
    var arrOfUser;
    getUsers();
    
});

function checkQ1() {
    var user = arrOfUser[arrOfUser.length - 1];
    var ae = $('input[name=quest1]:checked', '#q1').val();
    user['q1'] = ae;
    console.log("question 1: " + user.q1);
}

function checkQ2() {
    var user = arrOfUser[arrOfUser.length - 1];
    var ae = $('input[name=quest2]:checked', '#q2').val();
    user['q2'] = ae;
    console.log("question 2: " + user.q2);
}
function checkQ3() {
    var user = arrOfUser[arrOfUser.length - 1];
    var ae = $('input[name=quest3]:checked', '#q3').val();
    user['q3'] = ae;
    console.log("question 3: " + user.q3);
}
function checkQ4() {
    var user = arrOfUser[arrOfUser.length - 1];
    var ae = $('input[name=quest4]:checked', '#q4').val();
    user['q4'] = ae;
    console.log("question 4: " + user.q4);
}
function checkQ5() {
    var user = arrOfUser[arrOfUser.length - 1];
    var ae = $('input[name=quest5]:checked', '#q5').val();
    user['q5'] = ae;
    console.log("question 5: " + user.q5);
}
function checkQ6() {
    var user = arrOfUser[arrOfUser.length - 1];
    var ae = $('input[name=quest6]:checked', '#q6').val();
    user['q6'] = ae;
    console.log("question 6: " + user.q6);
}
function getUsers() {
    $.ajax({
        url: "http://192.168.250.90:8080/beastme/",
        async: true,
        success: logUsers,
        error: errorCallback
    });
}



/***********
 * Login
 */

$("#login-button").click(function (event) {
    var usernameInput = $("#username").val();
    var passwordInput = $("#password").val();

    var isLogged = arrOfUser.some(function (element) {        
        return element.username === usernameInput && element.password === passwordInput;
    })

    if (isLogged) {
        window.location.href = "mismatch.html";
    }
});


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
        url: 'http://192.168.250.90:8080/beastme/',
        type: 'POST',
        data: JSON.stringify({
            name: $("#nameInput").val(),
            username: $("#userInput").val(),
            password: $("#passInput").val(),
            email: $("#emailInput").val(),
        }),
        async: true,
        contentType: 'application/json',
        success: goToQuestions,
        error: errorCallback
    });

}



function goToQuestions(response) {

    window.location.href = "questions.html";
}

function updateUser() {
    var userToUpdate = arrOfUser[arrOfUser.length - 1];
    console.log("updating");
    $.ajax({
        url: 'http://192.168.250.90:8080/beastme/' + userToUpdate.id,
        type: 'PUT',
        data: JSON.stringify({
            name: userToUpdate.name,
            username: userToUpdate.username,
            password: userToUpdate.password,
            email: userToUpdate.email,
            q1: userToUpdate.q1,
            q2: userToUpdate.q2,
            q3: userToUpdate.q3,
            q4: userToUpdate.q4,
            q5: userToUpdate.q5,
            q6: userToUpdate.q6

        }),
        async: true,
        contentType: 'application/json',
        success: goToProfile,
        error: errorCallback
    });
}

function goToProfile() {
    console.log(arrOfUser[arrOfUser.length - 1])
    console.log("profile");
}
