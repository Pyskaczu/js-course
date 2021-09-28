window.addEventListener("load", evt => initIframes());
var pageCount = [0, 0, 0, 0];

function initIframes() {
    for (let i = 0; i < document.links.length - 1; i++) {
        document.links[i].addEventListener("click", ev => {
            ev.preventDefault();
            writeContent(ev.target);
        });
        document.links[i].linkNumber = i + 1;
    }
}

function writeContent(linkObj) {
    pageCount[linkObj.linkNumber]++;

    let newInnerHtml = "<h1>Ogladasz właśnie stronę nr " + linkObj.linkNumber + "<br />Strona ta została wyświetlona " + pageCount[linkObj.linkNumber] + " razy.<\/h1>";
    document.getElementById("content").contentWindow.document.body.innerHTML = newInnerHtml;
}