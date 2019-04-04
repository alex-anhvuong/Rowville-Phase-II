/* --------------This function gets called when body of HTML index file is loaded to display the Header elements------------- */
function drawHeader(){

    // Div element that encapsulates the Entire Div elements for header
    var headerDiv = document.getElementById("navbar-header");

    // This div contains logo image
    var logoDiv = createElement("div", "", "", "topnavlogo");
    headerDiv.appendChild(logoDiv);

    var logoImg= createElement("img", "", "","logoImg");
    logoImg.src="./images/horizontal-logo.png";
    logoDiv.appendChild(logoImg);

    //This div contain two more divs to create navigation to home page and steps list
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
    /*--- call function to load steps list that is from StepsPage.js ---- */
    stepsLink.onclick= function(){loadStepsContent();}

    onLoadHomepage();
}


