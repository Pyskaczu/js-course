window.onload = initAll;

function initAll() {
    let ids = ["WarsawId", "CracowId", "WroclawId"];
    ids.forEach(getElementByIdAndSetOnclick);
}

function getElementByIdAndSetOnclick(id) {
    document.getElementById(id).onclick = presentYourself
}

function presentYourself() {
    alert(this.value);
}