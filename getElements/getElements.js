window.onload = getElements;

function getElements() {
    let elem = document.getElementById("byId");
    elem.innerText = "This element was found by ID and centered";
    elem.setAttribute("align", "center")
}
