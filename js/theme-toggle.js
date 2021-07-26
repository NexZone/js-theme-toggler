var toggle = document.getElementById("toggle");

var themeStored = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
if (themeStored)
    document.documentElement.setAttribute("data-theme", themeStored);

toggle.onclick = function() {
    var themeCurrent = document.documentElement.getAttribute("data-theme");
    var themeTarget = "light";

    if ( themeCurrent === "light") {
        themeTarget = "dark";
    }
    
    else {
        themeTarget = "light";
    }

    document.documentElement.setAttribute("data-theme", themeTarget)
    localStorage.setItem("theme", themeTarget);
}