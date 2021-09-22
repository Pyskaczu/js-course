window.onload = initAll;

function initAll() {
    let ids = ["WarsawId", "KrakowId", "BreslauId"];
    ids.forEach(getElementByIdAndSetOnclick);
}

function getElementByIdAndSetOnclick(id) {
    document.getElementById(id).onclick = presentYourself
}

function presentYourself() {
    alert(this.value);
}