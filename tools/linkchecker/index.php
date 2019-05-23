<html>
    <head>
        <title>Content URL Checker</title>
        <script src="js/linkcheck.js" type="text/javascript"></script>
        <script src="../../Content/StepsContent.js" type="text/javascript"></script>

        <style>
        body {
            font-size: 1.2em;
            text-align: center;
        }
        </style>
    </head>
    <body>
        <script type="text/javascript">
            function setValue(){
                document.title = "Loading...";
                //document.pageText.innerHTML = "Loading...";
                document.stepContentForm.stepsContent.value = JSON.stringify(stepsContent);
                document.forms["stepContentForm"].submit();
            }
        </script>


        <h1>ThinkBiz Link Check Tool</h1>
        <div id="pageText" name="pageText">
            <p>This tool has been developed to check if any of the links within the thinkbiz web application are broken.</p>
            <p><span style="font-weight:bold">Warning: </span>This tool will take a considerable amount of time to run.</p>
        </div>

        <form id="stepContentForm" name="stepContentForm" method="post" action="php/pagecheck.php">
            <input type="hidden" name="stepsContent" id="stepsContent" value="">
            <button type="submit" onclick="setValue()" style="font-size:1.2em;padding:5px;">Click to Check Links</button>
        </form>

    </body>
</html>