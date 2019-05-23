function checkUrl(url) {
    var returnState = false;
    var xmlhttp;

    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            returnState = true;
        } else {
            returnState = false;
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    return returnState;
}

