try{
    var div1 = document.getElementsByTagName("div")[0];
    var div2 = document.getElementsByTagName("div")[1];
    var div3 = document.getElementsByTagName("div")[2];
    div1.setAttribute("align", "center");
    div2.setAttribute("align", "center");
    div3.setAttribute("align", "center");

    var heading = div1.getElementsByTagName("h1")[0];
    heading.setAttribute("style", "color : darkred; font-family:Arial");
    heading.innerHTML = "Back-End Development";

    var home = div2.getElementsByTagName("a")[0];
    home.setAttribute("href","Inner%20page.html");
    home.innerHTML = "Home";

    var front = div2.getElementsByTagName("a")[1];
    front.setAttribute("href","frontend.html");
    front.innerHTML = "Front-End Developing";

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
    var txt = "The backend of a web application is an enabler for a frontend experience. An application’s frontend may be the most beautifully<br />\n" +
        "crafted web page, but if the application itself doesn’t work, the application will be a failure. The backend of an application is <br />\n" +
        "responsible for things like calculations, business logic, database interactions, and performance. Most of the code that is required to <br />\n" +
        " make an application work will be done on the backend. Backend code is run on the server, as opposed to the client. This means that <br/>\n" +
        "backend developers not only need to understand programming languages and databases, but they must have an understanding of <br/>\n" +
        " server architecture as well. If an application is slow, crashes often, or constantly throws errors at users, it’s likely because of backend problems.<br/>\n" +
        "<br/>\n" +
        "Backend development is not all ones and zeros though. Much like frontend development, backend development has a human aspect to <br/>\n" +
        "it as well. Since most of the code for an application is written on the backend, it should be easy to understand and work with. Most <br/>\n" +
        "backend languages – like Ruby and Python – have standardized styles and idioms that make reading and writing code more efficient and enjoyable.<br/>\n" ;

    breackline(5);
    content.innerHTML=txt;
    content.setAttribute("style","color: dimgray; font-size: large; font-family: Arial");

    var image = div3.getElementsByTagName("img");
}catch (e) {
    alert(e.toString());
}