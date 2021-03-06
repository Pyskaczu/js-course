window.addEventListener("load", ev => {
    initWinLinks();
});

function initWinLinks() {
    for(let i = 0; i < document.links.length - 1; i++)
    document.links[i].addEventListener("click", ev => {
        ev.preventDefault();
        openNewWindow(ev.target);
    });
}

function openNewWindow(linkObj) {
    let catWin = window.open(linkObj.href, "catWin", "location=true,toolbar=true,resizable=no");
    catWin.focus();
}