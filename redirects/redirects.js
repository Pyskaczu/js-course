window.onload = redirect;

function redirect() {
   document.getElementById("redirect").addEventListener("click", ev => {
       ev.preventDefault();
       doRedirect();});
}

function doRedirect() {
    window.location = "redirectJS.html";
}