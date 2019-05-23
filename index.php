<!----------------------------------------index.html---------------------------------->
<!------------------------------loads on application launch--------------------------->

<!--------------------------------doctype declaration--------------------------------->
<!DOCTYPE html>
<!--------------------------------html page starts------------------------------------>
<html lang="en" dir="ltr">
<!--------------------------------------head starts----------------------------------->
<head>
    <meta charset="utf-8">
    <!---------------------------------page title--------------------------------------->
    <title> ThinkBiz </title>

    <!--------------------------meta information for responsiveness--------------------->

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-------------------loading scripts for the application---------------------------->
    <link rel="stylesheet" type="text/css" href="js/addtohomescreen/style/addtohomescreen.css">
    <script src="js/addtohomescreen/src/addtohomescreen.js"></script>
    <script>
      addToHomescreen();
    </script>
    <script type="text/javascript" src="Content/StepsContent.js"></script>
    <script type="text/javascript" src="js/HomePage.js"></script>

    <script type="text/javascript" src="js/CommonFunctions.js"></script>
    <script type="text/javascript" src="js/StepsList.js"></script>
    <script type="text/javascript" src="js/StepsPage.js"></script>
    <script type="text/javascript" src="js/menu.js"></script>
    <script type="text/javascript" src="Settings/Settings.js"></script>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

    <!------------------------loading styles for the application------------------------>
    <link href="https://fonts.googleapis.com/css?family=Bitter|Open+Sans" rel="stylesheet">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/home.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/stepNav.css">
    <link rel="stylesheet" href="css/step.css">
    <link rel="apple-touch-icon" href="images/favicon.png">
    <!--
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    -->
</head>

<body onload="changeContentBasedOnURL();">
<?php
  include 'php/setup.php';
  include 'php/analytics.php';
  $setup = new DatabaseSetup;

  $setup->createTables();

  $analytics = new Analytics;
  if (isset($_GET['Steps']) && $_GET['Steps'] != '') {
    $analytics->addLogEntry($_GET['Steps']);
  } else {
    $analytics->addLogEntry("home");
  }

?>
<div id="navbar-header">
</div>
<div id="mainContainerDiv">

</div>

</body>
</html>


<!--
<script type="application/javascript">loadStepsData("Step 1",1)</script>


<iframe src="https://www.youtube.com/embed/hc1Xq0hgFCs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<div class="font" id="introductionTextPara-HomePage">
  <p>Have you got a business idea that you want to turn into a reality?</p>
  <p>ThinkBiz has been created to help you take your business idea from just “thinking about it” to actually making it happen.</p>
  <p>We have simplified the process into 12 easy steps to follow, to start a business in Victoria. We have also provided lots of quick links to watch some helpful videos, find out further information and where to go for help and support along the way.</p>
</div>
<button id="btnClass">Click to get started</button>
-->
