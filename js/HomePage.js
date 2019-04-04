function onLoadHomepage() {

  document.getElementById("mainContainerDiv").innerHTML = "";
  let videoDiv = createElement("div", "", "introductionVideoDiv-HomePage", "");


  var obj = {"video": {
    "value": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='https://www.youtube.com/embed/hc1Xq0hgFCs' frameborder='0' allowFullScreen></iframe>"
  }};

  $("#introductionVideoDiv-HomePage").html(obj.video.value);
  document.getElementById("mainContainerDiv").appendChild(videoDiv);

  let introParaDiv = createElement("div", "", "introductionTextPara-HomePage", "");

  let clickToStartBtn = createElement("button", "Click to get started", "btnClass", "");


  document.getElementById("introductionTextPara-HomePage").innerHTML = homePageContent;
  document.getElementById("mainContainerDiv").appendChild(introParaDiv);

  document.getElementById("introductionTextPara-HomePage").appendChild(clickToStartBtn);

}

function onClickStepsButton () {
  loadStepsContent ();
}
window.onpopstate = function() {
  console.log(history.length);
 changeContentBasedOnURL ();

}

function changeContentBasedOnURL () {
  console.log (headerLoaded);
  if (!headerLoaded) {
    drawHeader ();
  }

  var urlParams = new URLSearchParams(window.location.search);

  if (urlParams.has('Steps')) {
    console.log(urlParams.get('Steps'));
    switch (urlParams.get('Steps')) {

      case "List":
        loadStepsContent ();
        break;
        case "1":
        loadStepsData ('Step 1', 1);
        break;
        case "2":
        loadStepsData ('Step 2', 2);
        break;
        case "3":
        loadStepsData ('Step 3', 3);
        break;

        case "4":
        loadStepsData ('Step 4', 4);
        break;
        case "5":
        loadStepsData ('Step 5', 5);
        break;
        case "6":
        loadStepsData ('Step 6', 6);
        break;
        case "7":
        loadStepsData ('Step 7', 7);
        break;
        case "8":
        loadStepsData ('Step 8', 8);
        break;
        case "9":
        loadStepsData ('Step 9', 9);
        break;

        case "10":
        loadStepsData ('Step 10', 10);
        break;
        case "11":
        loadStepsData ('Step 11', 11);
        break;
        case "12":
        loadStepsData ('Step 12', 12);
        break;
      default:
      onLoadHomepage ();
    }
  } else {

    console.log ("else");
    onLoadHomepage ();
  }

}
