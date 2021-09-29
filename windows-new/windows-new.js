window.addEventListener("load", ev => {
    initWinLinks();
});

function initWinLinks() {
    document.getElementById("newWin").addEventListener("click", ev => {
        ev.preventDefault();
        openNewWindow();
    });
}

function openNewWindow() {
    window.open("images/pixel1.jpg", "catWin", "location=true,toolbar=true,resizable=no");
}