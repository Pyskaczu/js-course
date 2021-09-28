window.addEventListener("load", evt => {
    initSlideshow();
});

let thisRobot = 0;
const imageBase = "images/robot";

function initSlideshow() {
    thisRobot = Math.floor(Math.random() * 3);
    setRobotImage();
    document.getElementById("previous").addEventListener("click", evt => {
        evt.preventDefault();
        previousSlide();
    });
    document.getElementById("next").addEventListener("click", evt => {
        evt.preventDefault();
        nextSlide();
    });
   setTimeout(nextSlide, 2 * 1000);
}

function nextSlide() {
    thisRobot++;
    thisRobot %= 3;
    setRobotImage();

    setTimeout(nextSlide, 2 * 1000);
}

function previousSlide() {
    thisRobot--;
    thisRobot = (thisRobot + 3) % 3;
    setRobotImage();

    setTimeout(previousSlide, 2 * 1000);
}

function setRobotImage() {
    document.getElementById("robotImg").src = imageBase + thisRobot + ".jpg";
}
