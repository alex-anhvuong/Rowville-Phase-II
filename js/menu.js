window.headerLoaded = false;
function drawHeader(){



    var headerDiv = document.getElementById("navbar-header");

    var stepsButtonDiv = createElement("div", "", "navbar-header", "");
    document.body.appendChild(stepsButtonDiv);

    var logoDiv = createElement("div", "", "", "topnavlogo");
    headerDiv.appendChild(logoDiv);

    var logoImg= createElement("img", "", "","logoImg");
    logoImg.src="./images/horizontal-logo.png";
    logoDiv.appendChild(logoImg);

    var topNavDiv = createElement("div", "", "topnav", "topnav");
    headerDiv.appendChild(topNavDiv);

    var homeDiv = createElement("div", "", "", "homeDiv");
    topNavDiv.appendChild(homeDiv);

    var homeLink = createElement("a", "Home", "", "homeLink");
    homeDiv.appendChild(homeLink);
    homeLink.href= "./index.html";

    var StepsDiv = createElement("div", "", "", "StepsDiv");
    topNavDiv.appendChild(StepsDiv);

    var stepsLink = createElement("a", "Steps", "", "stepsLink");
    StepsDiv.appendChild(stepsLink);
    stepsLink.onclick= function(){loadStepsContent();}

    headerLoaded = true;
    onLoadHomepage();
}
