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
    const githubPlatform = document.getElementsByClassName("content-platforms-github");
    const modrinthPlatform = document.getElementsByClassName("content-platforms-modrinth");
    const replitPlatform = document.getElementsByClassName("content-platforms-replit");
    const paragraphs = document.getElementsByTagName("p");

    // Event Listeners
    githubPlatform[0].addEventListener('mousedown', function() {
        redirect("https://github.com/deR0R0", true);
    });
    modrinthPlatform[0].addEventListener('mousedown', function() {
        redirect("https://modrinth.com/user/deR0R0", true);
    });
    replitPlatform[0].addEventListener('mousedown', function() {
        redirect("https://replit.com/@deR0R0", true);
    });
    paragraphs[0].addEventListener('mousedown', function() {
        redirect("./", false);
    });
    paragraphs[1].addEventListener('mousedown', function() {
        redirect("./projects/", false);
    });
    paragraphs[2].addEventListener('mousedown', function() {
        redirect("./waid/", false);
    });


});