window.addEventListener("DOMContentLoaded", (event) => {
    // Custom redirect for debugz
    function redirect(url, newtab) {
        windowURL = String(window.location);
        if(newtab) {
            window.open(url, '_blank');
        } else {
            if(windowURL.includes("https://")) {
                window.location.assign(url);
            } else {
                window.location.assign(url + "index.html");
            }
        }
    }


    // Elements
    const paragraphs = document.getElementsByTagName("p");

    // Event Listeners
    paragraphs[0].addEventListener('mousedown', function() {
        redirect("../", false);
    });
    paragraphs[1].addEventListener('mousedown', function() {
        redirect("../projects/", false);
    });
    paragraphs[2].addEventListener('mousedown', function() {
        redirect("../waid/", false);
    });


});