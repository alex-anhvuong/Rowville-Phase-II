
var container;
/*-------- this function is called on stepsLink in header.
It clears the mainContainer first, then calls another function for 
displaying steps list.----------------------------------------*/
function loadStepsContent () {

 //clear the main container Div
  container = document.getElementById("mainContainerDiv");
  container.innerHTML = '';
  
  /*call a function to create buttons for steps list on which step number
   and Titles are displayed and these buttons have onclick events 
   added to switch to corresponding Step content*/
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
  container.appendChild(stepsButtonDiv);

}
/* This function  uses switch statement to bind a function for each step in step list by determining it through step name . */
function selectNewStep(stepName) {
  return function () {
    switch (stepName) {

      case "Step 1":
      loadStepsData("Step 1",1);
      break;

      case "Step 2":
      loadStepsData("Step 2",2);
      break;

      case "Step 3":
      loadStepsData("Step 3",3);
      break;

      case "Step 4":
      loadStepsData("Step 4",4);
      break;

      case "Step 5":
      loadStepsData("Step 5",5);
      break;

      case "Step 6":
      loadStepsData("Step 6",6);
      break;

      case "Step 7":
      loadStepsData("Step 7",7);
      break;

      case "Step 8":
      loadStepsData("Step 8",8);
      break;

      case "Step 9":
      loadStepsData("Step 9",9);
      break;

      case "Step 10":
      loadStepsData("Step 10",10);
      break;

      case "Step 11":
      loadStepsData("Step 11",11);
      break;

      case "Step 12":
      loadStepsData("Step 12",12);
      break;

      default:
      console.log("levelSelectScreen : selectNewLevel : Default");
    }
  }
}
