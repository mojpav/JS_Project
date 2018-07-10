var body = document.getElementsByTagName("body")[0];
var div = body.getElementsByTagName("div")[0];
var h1 = div.getElementsByTagName("h1")[0];
var form = div.getElementsByTagName("form")[0];
div.setAttribute("align","center");
h1.setAttribute("id","h1");
h1.setAttribute("style","color: blueviolet");
document.getElementById("h1").innerHTML = "Regestration page";

//setting of fullname input
var Fullname = form.getElementsByTagName("input")[0];
Fullname.setAttribute("id","fullname");
Fullname.setAttribute("type","text");
Fullname.setAttribute("placeholder","Fullname");

//setting of Email.
var Email = form.getElementsByTagName("input")[1];
Email.setAttribute("id","email");
Email.setAttribute("type","text");
Email.setAttribute("placeholder","Email");
Email.setAttribute("autocomplete","off");

//seting username.
var User = form.getElementsByTagName("input")[2];
User.setAttribute("id","username");
User.setAttribute("type","text");
User.setAttribute("placeholder","UserName");
User.setAttribute("autocomplete","off");


//setting password.
var pass = form.getElementsByTagName("input")[3];
pass.setAttribute("id","pass");
pass.setAttribute("type","password");
pass.setAttribute("placeholder","PassWord");

//creating button.
var Button = form.getElementsByTagName("input")[4];
Button.setAttribute("type","button");
Button.setAttribute("value","Submit");
Button.setAttribute("onclick","clicked()")

//clicked event handler
 function clicked() {

        var username = document.getElementById('username');
        var fullname = document.getElementById('fullname');
        var email = document.getElementById('email');
        var pass = document.getElementById('pass');

        if ((pass.value == "" || username.value == "" || email.value == "" || fullname.value == ""))
            window.alert("Please fill all fields!");

        else {

            window.alert("your registration have done!");
            window.alert("Information Confirmed:\nFullname: " + fullname.value + "\n" + "Email: " + email.value + "\n" + "Username: " + username.value + "\n" + "Password: " + pass.value);
            document.getElementById('username').value = "";
            document.getElementById('pass').value = "";
            document.getElementById('email').value = "";
            document.getElementById('fullname').value = "";
            window.open("index.html");

        }
    }