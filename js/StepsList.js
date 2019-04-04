
//File variable declarations
var container;
/*-------- this function is called on stepsLink in header.
It clears the mainContainer first, then calls another function for
displaying steps list.----------------------------------------*/
function loadStepsContent () {

  let navRoute = "?Steps=List";
  window.history.pushState(null, null, navRoute);

  //container = document.getElementById("mainContainerDiv");
  //container.innerHTML = '';

  document.getElementById("mainContainerDiv").innerHTML = '';
  createDifferentStepsButtons ();
}

function createDifferentStepsButtons () {

  let stepsButtonDiv = createElement("div", "", "steps-btn-div", "");

  //iterates over numberOfLevels array and creates button for the corresponding level
  for (let index = 0; index < numberOfSteps.length; index++) {

    //checks if level is active or not
    if (numberOfSteps[index].isActive) {

      //creates a div for each step. Number of divs are created depending upon the length of StepsContent

      let stepWrapper = createElement("div", "", "", "step-wrapper")



      //creates anchor to add onclick event for calling selectNewStep function with an argument for step name

      let stepAnchor = createElement("a", "", "", "");

      stepAnchor.onclick = selectNewStep(numberOfSteps[index].name);


      //creates a label for each step

      let stepLabelClass = "step" + " " + "bg-" + numberOfSteps[index].id;

      let stepLabel = createElement("div", "", "", stepLabelClass)


      //create step content

      let stepContent = createElement("span", numberOfSteps[index].id + 1 + ". " + numberOfSteps[index].title, "", "step-content");


      stepWrapper.appendChild(stepAnchor);

      stepAnchor.appendChild(stepLabel);

      stepLabel.appendChild(stepContent);


      stepsButtonDiv.appendChild(stepWrapper);
      /*
      creates a button for each level with the level name as a label on the button
      let stepButton = createElement("button", numberOfSteps[index].name, "", "btnCustom");

      stepButton.classList.add('btnYellow');
      stepButton.onclick = selectNewStep(numberOfSteps[index].name);

      stepsButtonDiv.appendChild(stepButton);
      let breakEl = createElement('br', "", "", "");
      stepsButtonDiv.appendChild(breakEl);
      */
    }
  }
  //appends the level buttons div to the main display div
  document.getElementById("mainContainerDiv").appendChild(stepsButtonDiv);

}
/* This function  uses switch statement to bind a function for each step in step list by determining it through step name . */
function selectNewStep(stepName) {
  return function () {

    let seperatedString = stepName.split (" ");

    let navRoute = "?" + seperatedString[0] + "s=" + seperatedString[1];
    window.history.pushState(null, null, navRoute);
    console.log (stepName, Number(seperatedString[1]));
    loadStepsData (stepName, Number(seperatedString[1]));

  }
}
