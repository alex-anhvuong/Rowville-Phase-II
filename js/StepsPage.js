
let stepNameNav;
/* This function is used to load content for different Steps, 
all the content is being loaded from stepsContent.
 A particular step content is feteched 
using two parameters being passed to this function ie. 
StepName and numberOfStep */
function loadStepsData(stepName, numberOfStep) {
  stepNameNav = stepName;
  let nextButton = createElement("button", "Next Button", "", "nextButtonClass");
  let previousButton = createElement("button", "Previous Button", "", "prevButtonClass");

  document.getElementById("mainContainerDiv").innerHTML = '';

  /*creates wrapper div for the level UI which is basically appending
   data to document by creating elements dynamically and adding content to these elements*/
  let levelDiv = createElement("div", "", "levelDiv", "");

 // Next and Previous button for navigating to next and previous steps. Actions to these buttons are added using onclick events
  nextButton.onclick = function() {nextButtonAction()};
  previousButton.onclick = function() {previousButtonAction()};
  levelDiv.appendChild(nextButton);
  levelDiv.appendChild(previousButton);

  //  Create the heading: "Step {number}"
  let stepHeading = createElement("h1", "Step", "", "step-and-number");
  let stepNumberHeading = createElement("h1", numberOfStep, "", "step-and-number");

  //Create title tag for Brief Heading of the step being displayed
  let titleHeading = createElement("h2", "", "", "step-title");

  //appends the titles to the level wrapper div
  levelDiv.appendChild(stepHeading);
  levelDiv.appendChild(stepNumberHeading);
  levelDiv.appendChild(titleHeading);
 
  for (let counter = 0; counter < stepsContent.length; counter++) {
    /*store objects from stepsContent using counter, 
    counter 0 will correspond to first step data and so on.
     Then append this data to elements created dynamically.
      These elements are p elements, lists, headers. iframe used for embedding video */
    let stepsObj = stepsContent[counter];

    if (stepsObj.stepName === stepName) {

      titleHeading.innerHTML = stepsObj.title;

      let contentList = stepsObj.contentList;

      for (let j = 0; j < contentList.length; j++) {

        let contentObj = contentList[j];
        let contentData = contentObj.contentData;

        for (let k = 0; k < contentData.length; k++) {

          if (contentObj.isList) {
            let paraTag = createElement (contentObj.tagType, "", "", "");

            for(let x in contentData) {
              let li = document.createElement('li'),
              content = document.createTextNode(contentData[x]);

              li.appendChild(content);
              paraTag.appendChild(li);
              levelDiv.appendChild (paraTag);

            }
            break;
          } else if (contentObj.isLink) {
            let paraTag = createElement (contentObj.tagType, contentData[k], "", "");

            paraTag.href = contentData[k];

            levelDiv.appendChild (paraTag);
            break;

          } else if (contentObj.isUnderLine) {
            let paraTag = createElement (contentObj.tagType, contentData[k], "", "click_below");
            //paraTag.href = contentData[k];

            levelDiv.appendChild (paraTag);
            break;

          } else if (contentObj.isVideoLink) {
            let divTag = createElement ("p", "", "", "video_class");
            let paraTag = createElement (contentObj.tagType, "", "", contentObj.className);
            paraTag.src = contentData[k];
            paraTag.frameborder = "0";
            paraTag.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
            paraTag.setAttribute('allowfullscreen', '');
            divTag.appendChild(paraTag);
            levelDiv.appendChild (divTag);
            break;

          }
          else {
            let paraTag = createElement (contentObj.tagType, contentData[k], "", contentObj.className);

            if (contentObj.isBold) {
              paraTag.style.fontWeight = "bold";
            }
            levelDiv.appendChild (paraTag);
          }
        }
      }
      break;
    }

  }

  document.getElementById("mainContainerDiv").appendChild(levelDiv);
}

/*this function is being called when clicking nextButton button for switching to next step. Switch statement is used to change the arguments such as  step name and number for loadStepsData function*/

function nextButtonAction() {

  document.getElementById("mainContainerDiv").innerHTML = '';

  switch (stepNameNav) {
    case "Step 1":
      loadStepsData("Step 2", 2);
      break;

    case "Step 2":
      loadStepsData("Step 3", 3);
      break;

    case "Step 3":
      loadStepsData("Step 4", 4);
      break;

    case "Step 4":
      loadStepsData("Step 5", 5);
      break;

    case "Step 5":
      loadStepsData("Step 6", 6);
      break;

    case "Step 6":
      loadStepsData("Step 7", 7);
      break;

    case "Step 7":
      loadStepsData("Step 8", 8);
      break;

    case "Step 8":
      loadStepsData("Step 9", 9);
      break;

    case "Step 9":
      loadStepsData("Step 10", 10);
      break;

    case "Step 10":
      loadStepsData("Step 11", 11);
      break;

    case "Step 11":
      loadStepsData("Step 12", 12);
      break;

    default:
      break;


  }

}
 //Function to be called  on previousButton button element
function previousButtonAction() {

  document.getElementById("mainContainerDiv").innerHTML = '';

  switch (stepNameNav) {

    case "Step 2":
      loadStepsData("Step 1", 1);
      break;

    case "Step 3":
      loadStepsData("Step 2", 2);
      break;

    case "Step 4":
      loadStepsData("Step 3", 3);
      break;

    case "Step 5":
      loadStepsData("Step 4", 4);
      break;

    case "Step 6":
      loadStepsData("Step 5", 5);
      break;

    case "Step 7":
      loadStepsData("Step 6", 6);
      break;

    case "Step 8":
      loadStepsData("Step 7", 7);
      break;

    case "Step 9":
      loadStepsData("Step 8", 8);
      break;

    case "Step 10":
      loadStepsData("Step 9", 9);
      break;

    case "Step 11":
      loadStepsData("Step 10", 10);
      break;

    case "Step 12":
      loadStepsData("Step 11", 11);
      break;

    default:
      break;


  }

}
