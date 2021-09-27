window.addEventListener("load", evt => {
    rolloverInit()
});

function rolloverInit() {
    for (let i = 0; i < document.images.length; i++) {
        if(document.images[i].parentNode.tagName === "A") {
            setupRollover(document.images[i]);
        }
    }
}

function setupRollover(image) {
    image.outImage = new Image();
    image.outImage.src = image.src;
    image.addEventListener("mouseout", evt => {
        image.src = image.outImage.src;
        // OR evt.target.src = evt.target.outImage.src;
    });


    image.clickImage = new Image();
    image.clickImage.src = "images/" + image.id + "_click.png";
    image.addEventListener("click", evt => {
        // or image.src = image.clickImage.src;
        evt.target.src = evt.target.clickImage.src;
    });

    image.overImage = new Image();
    image.overImage.src = "images/" + image.id + "_on.png";
    image.addEventListener("mouseover", evt => {
        // or image.src = image.overImage.src;
        evt.target.src = evt.target.overImage.src;
    });
}
