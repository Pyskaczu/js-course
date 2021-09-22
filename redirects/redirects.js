window.onload = redirect;

function redirect() {
   document.getElementById("redirect").onclick = doRedirect;
}

function doRedirect() {
    window.location = "redirectJS.html";
    return false;
}