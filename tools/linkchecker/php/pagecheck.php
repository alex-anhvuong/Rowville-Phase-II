<?php
    // Check URL exists.
    function urlExists($url) {
        // File headers version
        $file_headers = @get_headers($url);
        if (!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
            return false; 
        } else {
            return true; 
        }

        // // CURL Version
        // $timeout = 10;
        // $ch = curl_init();
        // curl_setopt ( $ch, CURLOPT_URL, $url );
        // curl_setopt ( $ch, CURLOPT_RETURNTRANSFER, 1 );
        // curl_setopt ( $ch, CURLOPT_TIMEOUT, $timeout );
        // $http_respond = curl_exec($ch);
        // $http_respond = trim( strip_tags( $http_respond ) );
        // $http_code = curl_getinfo( $ch, CURLINFO_HTTP_CODE );
        // if ( ( $http_code == "200" ) || ( $http_code == "302" ) ) {
        //     return true;
        // } else {
        //     // return $http_code;, possible too
        //     return false;
        // }
        // curl_close( $ch );
    }

    // Check each of the links within the app.
    function runCheckTool($stepsContentJson) {
        foreach ($stepsContentJson as $stepContent) {
            
            echo "<h2>".$stepContent->title."</h2>";
            
            foreach ($stepContent->contentList as $content) {
                if ($content->isLink) {
                    echo $content->contentData[0];
                    echo "<br>";
                    if (urlExists($content->contentData[0])) {
                        echo "Pass";
                    } else {
                        echo "BROKEN";
                    }
                    echo "<br><br>";
                }
            }
        }
    }

?>
<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>
<body>

<?php
    // Long process starts here
    $stepsContent = json_decode($_POST['stepsContent']);
    runCheckTool($stepsContent);
?>
</body>
</html>