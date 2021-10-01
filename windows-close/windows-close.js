let newWindow = null;
window.addEventListener("load", ev => {
    newWinLinks();
});

function newWinLinks() {
    for(let i = 0; i < document.links.length - 1; i++) {
        document.links[i].addEventListener("click", ev => {
            changeWindowState(ev.target.id);
            ev.preventDefault();
        });
    }
}


function changeWindowState(id) {
    switch (id) {
        case "closeWin":
            if(isWindowOpen()) {
                newWindow.close();
            } else {
                alert("Window is not open!");
            }
            break;
        case "openWin":
            if(isWindowOpen()) {
                alert("Window already open");
            } else {
                newWindow = window.open("", "newWin");
            }
            break;
    }
}

function isWindowOpen() {
    return newWindow && !newWindow.closed;
}

