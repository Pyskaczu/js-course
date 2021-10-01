window.addEventListener("load", ev => {
    initWindows();
});

function initWindows() {
    if(document.getElementById("childField")) {
        document.getElementById("childField").addEventListener("change", ev => {updateParent(ev.target.value);});
    } else {
       window.open("windows-interaction-child.html", "newWin", "status=yes");
    }
}

function updateParent(value) {
    opener.document.getElementById("msgLine").value = value;
}
