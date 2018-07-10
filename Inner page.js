//Inner page ------------------------------------->
var div1 = document.getElementsByTagName("div")[0];
var div2 = document.getElementsByTagName("div")[1];
var div3 = document.getElementsByTagName("div")[2];
var UL = div2.getElementsByTagName("ul")[0];
var image = div1.getElementsByTagName("img")[0];
var front_link = UL.getElementsByTagName("a")[0];
var back_link = UL.getElementsByTagName("a")[1];
var logout =UL.getElementsByTagName("a")[2];
var time = div1.getElementsByTagName("p")[0];
div2.setAttribute("align","center");
//image property.
div1.setAttribute("align","center");
image.setAttribute("src","http://www.animatedimages.org/data/media/707/animated-welcome-image-0064.gif");
// link settings.
front_link.setAttribute("id","front");
document.getElementById("front").innerHTML = "Front-End Developing";
front_link.setAttribute("href","frontend.html");

back_link.setAttribute("id","back");
back_link.setAttribute("href","Back-End.html");
document.getElementById("back").innerHTML = "Back-End Developing";

logout.setAttribute("id","out");
document.getElementById("out").innerHTML="Log out";
logout.setAttribute("href","index.html");

//content.
breackline(8);
var content = div3.getElementsByTagName("p")[0];
content.setAttribute("align","center");
content.setAttribute("id","txt");
content.setAttribute("style","color: dimgray; font-size: large; font-family: Arial");
var introduce = "Hello every Body!";
var br ="<br>";
var about_me = "I'm Ali Najafi. I like Engineering and specially like Ns(Network Security)." +br+
    "in this page i will show some advantages about Web Developing."+br +
    "hope You like this page :)";
content.innerHTML = introduce + br + about_me;

//--------------------------------------------------------
function breackline(number){
    var i;
    var br;
    for(i=0;i<=number;i++) {
        br = document.createElement("br");
        div2.appendChild(br);
    }
}

//End<----------------------------------------------------


