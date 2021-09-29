window.addEventListener("load", ev => {
    initWinLinks();
});

function initWinLinks() {
    for(let i = 0; i < document.links.length - 1; i++)
    document.links[i].addEventListener("click", ev => {
        ev.preventDefault();
        openNewWindow(ev.target, i);
    });
}

function openNewWindow(linkObj, id) {
    let catWin = window.open(linkObj.href, "catWin" + id, "location=true,toolbar=true,resizable=no");
}