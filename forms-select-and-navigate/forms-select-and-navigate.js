window.addEventListener("load", ev => {
    initForm();
});

function initForm() {
    let selectWE = document.getElementById("newLocation");
    selectWE.selectedIndex = 0;
    selectWE.addEventListener("change", ev => {jumpPage(ev.target);});
}

function jumpPage(selectWe) {
    let newPage = selectWe.options[selectWe.selectedIndex].value;
    if(newPage !== "") {
        window.location = newPage;
    }
}
