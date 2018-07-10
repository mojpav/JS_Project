
//Login page --------------------------------------------------->

var body = document.getElementsByTagName("body")[0];//get body tag
var div = body.getElementsByTagName("div")[0];//firs div.
//setting div tag attribs.
div.setAttribute("id","div1");
div.setAttribute("align","center");

var h1 = div.getElementsByTagName("h1")[0];//login header.
var h1_text = document.createTextNode("Login");
h1.setAttribute("id","h1");
document.getElementById("h1").innerHTML = "Login";
h1.setAttribute("style","color: blueviolet");
//getting form tag.
var form = div.getElementsByTagName("form")[0];
//getting first input(Username).
var user_input = form.getElementsByTagName("input")[0];

//setting Username input attribs.
user_input.setAttribute("type","text");
user_input.setAttribute("id","username");
user_input.setAttribute("placeholder","Username");
user_input.setAttribute("autocomplete","off");
//getting second input (pass).
var pass_input = form.getElementsByTagName("input")[1];

//setting attribs.
pass_input.setAttribute("id","pass");
pass_input.setAttribute("type","password");
pass_input.setAttribute("placeholder","Password");

//getting third input(submit button).
var button = form.getElementsByTagName("input")[2];
//setting attribs.
button.setAttribute("type","button");
button.setAttribute("onclick","clicked()");
button.setAttribute("value","Submit");

//creating sign up link.
var link = div.getElementsByTagName("a")[0];
link.setAttribute("id","l1");
link.setAttribute("style","font-size: 120%");
link.setAttribute("href","Rigestration%20page.html");
var text = document.createTextNode("sign up");
link.appendChild(text);
div.appendChild(link);

//breaking line function.
function br(){
    var br = document.createElement("br");
    var p = document.createElement("p");
    p.setAttribute("style","line-height: 400%;");
    p.appendChild(br);
    div.appendChild(p);
}

br();

// button onclick eventhandler---------------
var Corepass = ["ali"];
var CoreUser = ["ali"];
function clicked(){


    var inpass = document.getElementById('pass');
    var inuser = document.getElementById('username');
    if(inpass.value==""||inuser.value=="")
        window.alert("Fill all fields!");
    else{
        var i;
        for(i=0;i<CoreUser.length;i++)
        if(CoreUser[i]==inuser.value){
            if(Corepass[i]==inpass.value){
                //  window.alert("correct pass :)");
                window.open("Inner%20page.html");
                document.getElementById('username').value = "";
                document.getElementById('pass').value = "";

            }

            else
                window.alert("incorrct pass :(");
        }

        else
            window.alert("Username is not correct!!");
    }
}

// end of login page <---------------------------------------------------------

