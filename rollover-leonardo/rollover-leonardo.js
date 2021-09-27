window.addEventListener("load", evt => {
    rolloverInit();
});

function rolloverInit() {
    for (let i = 0; i < document.links.length; i++) {
        let linkObj = document.links[i];
        if (linkObj.className) {
            let imgObj = document.getElementById(linkObj.className);
            if (imgObj) {
                setupRollover(linkObj, imgObj);
            }
        }
    }
}

function setupRollover(linkObj, imgObj) {
    linkObj.imagesToChange = new Array(2);
    linkObj.outImages = new Array(2);
    linkObj.overImages = new Array(2);

    for (let i = 0; i < linkObj.imagesToChange.length; i++) {
        linkObj.outImages[i] = new Image();
        linkObj.overImages[i] = new Image();
    }

    linkObj.imagesToChange[0] = imgObj;
    linkObj.imagesToChange[1] = document.getElementById(linkObj.id + "Img");

    linkObj.outImages[0].src = linkObj.imagesToChange[0].src;
    linkObj.outImages[1].src = linkObj.imagesToChange[1].src;

    linkObj.overImages[0].src = "images/" + linkObj.id + "Text.gif";
    linkObj.overImages[1].src = "images/" + linkObj.id + "_on.gif";

    linkObj.addEventListener("mouseover", evt => {
        for (let i = 0; i < linkObj.imagesToChange.length; i++) {
            evt.target.parentNode.imagesToChange[i].src = evt.target.parentNode.overImages[i].src;
        }
    });

    linkObj.addEventListener("mouseout", evt => {
        for (let i = 0; i < linkObj.imagesToChange.length; i++) {
            linkObj.imagesToChange[i].src = linkObj.outImages[i].src;
            // OR evt.target.src = evt.target.outImage.src;
        }
    });
}