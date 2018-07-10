// div1---> Heading  div2----> links div3-----> content and image.
try {
    var div1 = document.getElementsByTagName("div")[0];
    var div2 = document.getElementsByTagName("div")[1];
    var div3 = document.getElementsByTagName("div")[2];
    div1.setAttribute("align", "center");
    div2.setAttribute("align", "center");
    div3.setAttribute("align", "center");

    var heading = div1.getElementsByTagName("h1")[0];
    heading.setAttribute("style", "color : darkred; font-family:Arial");
    heading.innerHTML = "Front-End Developing";

    var home = div2.getElementsByTagName("a")[0];
    home.setAttribute("href","Inner%20page.html");
    home.innerHTML = "Home";

    var back_link = div2.getElementsByTagName("a")[1];
    back_link.setAttribute("href","Back-End.html");
    back_link.innerHTML = "Back-End Developing";

    var out = div2.getElementsByTagName("a")[2];
    out.setAttribute("href","index.html");
    out.innerHTML = "Log Out";

    //--------------------------
    function breackline(number){
        var i;
        var br;
        for(i=0;i<=number;i++) {
            br = document.createElement("br");
            div2.appendChild(br);
        }
    }

    var content = div3.getElementsByTagName("p")[0];
    var br = "<b>";
    var txt = "software engineering, the terms front end and back end refer to the separation of concerns between the presentation layer (front end), <br />\n" +
        "                and the data access layer (back end) of a piece of software, or the physical infrastructure or hardware.<br />\n" +
        "                In the client–server model, the client is usually considered the front end and the server is usually considered the back end,<br />\n" +
        "                even when some presentation work is actually done on the server.<br />\n" +
        "                In software architecture, there may be many layers between the hardware and end user. <br/>Each can be spoken of as having a front end and a back end. The front is an abstraction, simplifying the underlying component<br/>\n" +
        "                by providing a user-friendly interface, while the back usually handles business logic and data storage.<br/>\n" +
        "                In front end Developing HTML,CSS and JavaScript are never ever seprated part of Front end developing .<br/>\n" +
        "                Here is the diagram of bieng a front-end developer:<br/>"
    breackline(5);
    content.innerHTML=txt;
    content.setAttribute("style","color: dimgray; font-size: large; font-family: Arial");

    var image = div3.getElementsByTagName("img");

}catch (e) {
    alert(e.toString());
}


