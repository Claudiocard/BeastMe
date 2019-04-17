$(document).ready(function () {


    function User(fullname, username, password, email) {
        this.getFullname = function () {
            return fullname;
        }
        this.getUsername = function () {
            return username;
        }
        this.getPassword = function () {
            return password;
        }
        this.getEmail = function () {
            return email;
        }
    }

    var andre = new User("André Lança", "andrelanca14", "asd123", "andrelanca14@gmail.com");
    var pedro = new User("Pedro Campos", "pcampos", "pcampos", "pcampos@gmail.com");
    var ana = new User("Ana Serafim", "serafim19", "ser12", "anaserafim@gmail.com");
    var fabio = new User("Fábio Sequeira", "fabiolous", "fbio", "fabio@gmail.com");

    var arrOfUser = [andre, pedro, ana, fabio];



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
            window.location.href = "register.html";
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

    $("#next-btn").click(function (event) {

        arrOfUser.push(new User($("#nameInput").val(), $("#userInput").val(), $("#passInput").val(), $("#emailInput").val()));
        console.log(arrOfUser);
 
    })
     









});