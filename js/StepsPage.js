
let stepNameNav;
/* This function is used to load content for different Steps,
all the content is being loaded from stepsContent.
 A particular step content is feteched
using two parameters being passed to this function ie.
StepName and numberOfStep */
let stepNumber;


function loadStepsData(stepName, numberOfStep) {
  stepNumber = numberOfStep;
  stepNameNav = stepName;

  document.getElementById("mainContainerDiv").innerHTML = '';
  window.scrollTo(0,0);

  /*creates wrapper div for the level UI which is basically appending
   data to document by creating elements dynamically and adding content to these elements*/
  let levelDiv = createElement("div", "", "levelDiv", "");

 // Next and Previous button for navigating to next and previous steps. Actions to these buttons are added using onclick events
  //nextButton.onclick = function() {nextButtonAction()};
  //previousButton.onclick = function() {previousButtonAction()};
  //buttonWrapper.appendChild(previousButton);
  //buttonWrapper.appendChild(nextButton);
  levelDiv.appendChild(createButtonAndreturnDiv());

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
            paraTag.target = "_blank";
            levelDiv.appendChild (paraTag);
            break;

          } else if (contentObj.isUnderLine) {
            let paraTag = createElement (contentObj.tagType, contentData[k], "", "click_below");
            paraTag.href = contentObj.href;
            paraTag.target = "_blank";
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
              paraTag.style.fontWeight = "900";
              paraTag.style.fontFamily = "'Bitter', serif";
            }
            levelDiv.appendChild (paraTag);
          }
        }
      }
      break;
    }

  }
  levelDiv.appendChild(createButtonAndreturnDiv());
  document.getElementById("mainContainerDiv").appendChild(levelDiv);
}

function createButtonAndreturnDiv () {

  let buttonWrapper = createElement("div", "", "", "btn-container");
  let previousButton = createElement("button", "Previous Step", "", "prevButtonClass");
  let nextButton = createElement("button", "Next Step", "", "nextButtonClass");

  nextButton.onclick = function() {nextButtonAction()};
  previousButton.onclick = function() {previousButtonAction()};
  buttonWrapper.appendChild(previousButton);
  buttonWrapper.appendChild(nextButton);

  return buttonWrapper;
}

/*this function is being called when clicking nextButton button for switching to next step. Switch statement is used to change the arguments such as  step name and number for loadStepsData function*/

function nextButtonAction() {

  if (stepNumber == 12) return null
  document.getElementById("mainContainerDiv").innerHTML = '';


  let newStepNumber = stepNumber + 1;
  let newStepName = "Step " + newStepNumber;
  let navRoute = "?Steps=" + newStepNumber;
  window.history.pushState(null, null, navRoute);
  loadStepsData(newStepName, newStepNumber);

}
 //Function to be called  on previousButton button element
function previousButtonAction() {

  if (stepNumber == 1) return null
  document.getElementById("mainContainerDiv").innerHTML = '';

  let newStepNumber = stepNumber - 1;
  let newStepName = "Step " + newStepNumber;

  let navRoute = "?Steps=" + newStepNumber;
  window.history.pushState(null, null, navRoute);
  loadStepsData(newStepName, newStepNumber);

}
