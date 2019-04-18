$(document).ready(function () {


    function User(fullname, username, password, email){
        {
            q1:0
            q2:0
            q3:0
            q4:0
            q5:0
            q6:0
        }
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
        
        this.getQ1 = function(){
            return this.q1;
        }
        this.getQ2 = function(){
            return this.q2;
        }
        this.getQ3 = function(){
            return this.q3;
        }
        this.getQ4 = function(){
            return this.q4;
        }
        this.getQ5 = function(){
            return this.q5;
        }
        this.getQ6 = function(){
            return this.q6;
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
        console.log(arrOfUser)
        window.location.href="questions.html";
 
    })
     
    /***********
     * Quizz
     ***********/

        var user = arrOfUser[arrOfUser.length-1]
        console.log(user);
        
        $('#q1 input').on('change', function(){
            var ae = $('input[name=quest1]:checked', '#q1').val();
            user['q1'] = ae;
            console.log("question 1: " + user.getQ1()) 
        });

        $('#q2 input').on('change', function(){
            var ae = $('input[name=quest2]:checked', '#q2').val();
            user['q2'] = ae;
            console.log("question 2: " + user.getQ2()) 
        });

        $('#q3 input').on('change', function(){
            var ae = $('input[name=quest3]:checked', '#q3').val();
            user['q3'] = ae;
            console.log("question 3: " + user.getQ3()) 
        });

        $('#q4 input').on('change', function(){
            var ae = $('input[name=quest4]:checked', '#q4').val();
            user['q4'] = ae;
            console.log("question 4: " + user.getQ4()) 
        });

        $('#q5 input').on('change', function(){
            var ae = $('input[name=quest5]:checked', '#q5').val();
            user['q5'] = ae;
            console.log("question 5: " + user.getQ5()) 
        });

        $('#q6 input').on('change', function(){
            var ae = $('input[name=quest6]:checked', '#q6').val();
            user['q6'] = ae;
            console.log("question 6: " + user.getQ6()) 
        });

        $("#quizz-nxt-btn").click(function (event) {
            window.location.href="profile.html"; 
        })
        
     








});