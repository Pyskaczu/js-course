window.addEventListener("load", evt => {
    rolloverInit()
});

function rolloverInit() {
    for (let i = 0; i < document.links.length; i++) {
        let linkObj = document.links[i];
        if (linkObj.id) {
            let imgObj = document.getElementById(linkObj.id + "Img");
            if (imgObj) {
                setupRollover(linkObj, imgObj);
            }
        }

    }
}

function setupRollover(linkObj, imgObj) {
    linkObj.imageToChange = imgObj;

    linkObj.outImage = new Image();
    linkObj.outImage.src = imgObj.src;

    linkObj.overImage = new Image();
    linkObj.overImage.src = "images/" + linkObj.id + "_on.png";

    linkObj.addEventListener("mouseover", evt => {
        evt.target.imageToChange.src = evt.target.overImage.src;
    });

    linkObj.addEventListener("mouseout", evt => {
        linkObj.imageToChange.src = linkObj.outImage.src;
        // OR evt.target.src = evt.target.outImage.src;
    });
}
