
let stepNameNav;
let stepNumber;
function loadStepsData(stepName, numberOfStep) {
  stepNumber = numberOfStep;
  stepNameNav = stepName;
  let nextButton = createElement("button", "Next Button", "", "nextButtonClass");
  let previousButton = createElement("button", "Previous Button", "", "prevButtonClass");

  document.getElementById("mainContainerDiv").innerHTML = '';

  //creates wrapper div for the level UI
  let levelDiv = createElement("div", "", "levelDiv", "");
  levelDiv.appendChild(nextButton);
  levelDiv.appendChild(previousButton);

  nextButton.onclick = function() {nextButtonAction()};
  previousButton.onclick = function() {previousButtonAction()};


  //  Create the heading: "Step {number}"
  let stepHeading = createElement("h1", "Step", "", "step-and-number");
  let stepNumberHeading = createElement("h1", numberOfStep, "", "step-and-number");

  //Create title tag
  let titleHeading = createElement("h2", "", "", "step-title");

  //appends the titles to the level wrapper div
  levelDiv.appendChild(stepHeading);
  levelDiv.appendChild(stepNumberHeading);
  levelDiv.appendChild(titleHeading);

  for (let counter = 0; counter < stepsContent.length; counter++) {

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

function nextButtonAction() {

  if (stepNumber == 12) return null
  document.getElementById("mainContainerDiv").innerHTML = '';


  let newStepNumber = stepNumber + 1;
  let newStepName = "Step " + newStepNumber;
  let navRoute = "step" + newStepNumber;
  Router.navigate (navRoute);
  loadStepsData(newStepName, newStepNumber);

}

function previousButtonAction() {

  if (stepNumber == 1) return null
  document.getElementById("mainContainerDiv").innerHTML = '';

  let newStepNumber = stepNumber - 1;
  let newStepName = "Step " + newStepNumber;

  let navRoute = "step" + newStepNumber;
  Router.navigate (navRoute);
  loadStepsData(newStepName, newStepNumber);

}
