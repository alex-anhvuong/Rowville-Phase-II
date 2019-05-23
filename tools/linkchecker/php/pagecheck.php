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
            
            echo "<h2>".$stepContent->stepName."</h2><h3>\"".$stepContent->title."\"</h3>";
            
            echo "<table><tr><th>URL</th><th>Status</th></tr>";
            foreach ($stepContent->contentList as $content) {
                if ($content->isLink) {
                    echo "<tr><td class='url'>";
                    echo $content->contentData[0];
                    echo "</td>";
                    if (urlExists($content->contentData[0])) {
                        echo "<td style='background-color:#c9f9c0' class='status'>PASS</td>";
                    } else {
                        echo "<td style='background-color:#ff8787' class='status'>BROKEN</td>";
                    }
                    echo "</tr>";
                }
            }
            echo "</table><hr />";
        }
    }

?>
<!DOCTYPE html>
<html>
<head>
  <title>Page Status</title>

    <style>
        body {
            font-size: 1.2em;
            text-align: center;
        }
        table {
            width: 60%;
            border-collapse: collapse;
            margin: 0 auto;
        }

        table, td, th {
            border: 1px solid black;
        }
        th, td {
            padding: 5px;
            text-align: center;
        }
        th {
            height: 25px;
            font-size: 1.3em;
        }
        .url {
            width: 60%;
        }
        .status {
            width: 15%;
        }
        hr {
            width: 80%;
            margin-top: 80px
        }
        @media only screen and (max-width: 768px) {
            body {
            font-size: 2em;
            }
            table {
                width: 95%;
                border-collapse: collapse;
                margin: 0 auto;
            }

            table, td, th {
                border: 1px solid black;
            }
            th, td {
                padding: 5px;
                text-align: center;
            }
            th {
                height: 25px;
                font-size: 2.5em;
            }
            .url {
                width: 80%;
            }
            .status {
                width: 20%;
            }
            hr {
                width: 80%;
                margin-top: 80px
            }
        }
    </style>
</head>
<body>
<?php
    $stepsContent = json_decode($_POST['stepsContent']);
    runCheckTool($stepsContent);
?>
</body>
</html>