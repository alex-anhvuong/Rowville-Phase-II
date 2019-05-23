<html>
    <head>
        <script src="js/linkcheck.js" type="text/javascript"></script>
        <script src="../../Content/StepsContent.js" type="text/javascript"></script>
    </head>
    <body>
        <script type="text/javascript">
            // for (let counter = 0; counter < stepsContent.length; counter++) {
            //     let stepContent = stepsContent[counter];

            //     for (const contentListItems of stepContent.contentList) {
            //         console.log(contentListItems.isLink);
            //         if (contentListItems.isLink) {
            //             console.log(checkUrl(contentListItems.contentData[0]));
            //         }
            //     }
            // }

            var jsonStepContent = JSON.stringify(stepsContent);
        </script>

        <?php
            var_dump(json_decode($jsonStepContent));
        ?>

    </body>
</html>