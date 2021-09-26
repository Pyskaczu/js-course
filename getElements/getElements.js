window.onload = getElements;

function getElements() {
    let elem = document.getElementById("byId");
    elem.setAttribute("align", "center")
    elem.innerText = "This element was found by ID and centered in java script";
}
