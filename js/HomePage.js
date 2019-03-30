function onLoadHomepage() {

  var obj = {"video": {
    "value": "<iframe title='YouTube video player' type=\"text/html\" width='640' height='390' src='https://www.youtube.com/embed/hc1Xq0hgFCs' frameborder='0' allowFullScreen></iframe>"
  }};

  $("#introductionVideoDiv-HomePage").html(obj.video.value);

  document.getElementById("introductionTextPara-HomePage").innerHTML = homePageContent;

}

function onClickStepsButton () {
  loadStepsContent ();
}
